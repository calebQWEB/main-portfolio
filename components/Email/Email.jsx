import React, { useState } from 'react'
import './email.css'
import emailjs from 'emailjs-com'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'

const Email = () => {
    const { ref, inView } = useInView({
        threshold: 0.5
    })

    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    type: 'tween'
                }
            })
        }

        if (!inView) {
            animation.start({
                y: 100,
                opacity: 0,
                duration: 1
            })
        }
    }, [inView])

    const [InputValue, setInputValue] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [sent, setSent] = useState(false)
    const [formHide, setFormHide] = useState(true)
    const [errors, setError] = useState('')

    const InputChange = (e) => {
        setInputValue(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setInputValue({
            name: '',
            email: '',
            message: ''
        })

        emailjs.sendForm('service_91m6kfz', 'template_1dkknh6', e.target, '1Hn4T0-kg_zotZSBS')
            .then((result) => {
                console.log(result.text);
                setError('Sent')
            }, (error) => {
                console.log(error.text);
                setError('Not sent, check your internet')
            });

        setSent(true)
        setFormHide(false)
        e.target.reset()
    }


    const goBack = () => {
        setSent(false)
        setFormHide(true)
    }

    return (
        <div className='email-section' ref={ref}>
            <h1 className='form-header'>Send a message</h1>
            <p className='form-para'>Business proposals, questions and stuff</p>

            {/* When sent is true (triggered by submitting the form*/}
            {sent && (
                <motion.div className='sent-container' initial={{ scale: 0 }} animate={{ scale: 1, transition: { type: 'spring' } }}>
                    <div className='sent'>{errors}</div>
                    <motion.button className='go-back' onClick={goBack} whileHover={{ scale: 1.1 }}>OK</motion.button>
                </motion.div>
            )}

            {formHide && (
                <motion.form onSubmit={sendEmail} animate={animation}>
                    <div className='name-email'>
                        <div>
                            <input type="text" name='name' value={InputValue.name} onChange={InputChange} placeholder='Name' />
                        </div>

                        <div>
                            <input type="email" name='email' value={InputValue.email} onChange={InputChange} placeholder='Email' />
                        </div>
                    </div>

                    <div className='message-section'>
                        <textarea name="message" value={InputValue.message} onChange={InputChange} placeholder='Enter your Message' />
                    </div>

                    <button type='submit' className='submit-button'>SEND</button>

                </motion.form>
            )}
        </div>
    )
}

export default Email