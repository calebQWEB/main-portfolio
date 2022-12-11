import React, { useRef } from 'react'
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_91m6kfz', 'template_1dkknh6', e.target, '1Hn4T0-kg_zotZSBS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }
    return (
        <div className='email-section' ref={ref}>
            <h1 className='form-header'>Send a message</h1>
            <p className='form-para'>Business proposals, questions and stuff</p>
            <motion.form onSubmit={sendEmail} animate={animation}>
                <div className='name-email'>
                    <div>
                        <label></label>
                        <input type="text" name='Name' placeholder='Name' />
                    </div>

                    <div>
                        <label></label>
                        <input type="email" name='Email' placeholder='Email' />
                    </div>
                </div>

                <div>
                    <label></label>
                    <textarea name="Message" placeholder='Enter your Message' />
                </div>

                <button type='submit' className='submit-button'>SEND</button>

            </motion.form>
        </div>
    )
}

export default Email