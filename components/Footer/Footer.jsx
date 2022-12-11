import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin, FaTwitter, FaRegArrowAltCircleDown, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'


const Footer = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
    })

    const motions = useAnimation()

    useEffect(() => {
        if (inView) {
            motions.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    type: 'tween'
                }
            })
        }

        if (!inView) {
            motions.start({
                y: 50,
                opacity: 0,
                transition: {
                    type: 'tween',
                    duration: 0.5
                }
            })
        }
    }, [inView])
    return (
        <div className='footer-section' ref={ref}>
            <motion.footer animate={motions}>
                <div className='footer-container'>
                    <div className='connect'>
                        <h1>LET US CONNECT</h1>
                        <FaRegArrowAltCircleRight className='footer-arrow' />
                        <FaRegArrowAltCircleDown className='footer-arrow-mobile' />
                    </div>

                    <div className='email'>
                        <Link style={{ textDecoration: 'none' }}><span>calebochai09@gmail.com</span></Link>
                        <Link style={{ textDecoration: 'none' }}><span>ochaizydda@gmail.com</span></Link>
                    </div>

                    <div className='footer-links'>
                        <Link to='/resume' style={{ textDecoration: 'none' }}><h2>RESUME</h2></Link>
                        <Link to='/work' style={{ textDecoration: 'none' }}><h2>WORK</h2></Link>
                    </div>
                </div>
                <div className='footer-line'></div>
                <div className='copyright-container'>
                    <div className='copyright'>
                        &copy;
                        <span>Caleb Ochai 2022</span>
                    </div>

                    <div className='footer-socials'>
                        <a href='https://github.com/calebQWEB' target='_blank'><FaGithub className='github' /></a>
                        <a href='https://www.linkedin.com/in/caleb-ochai-68033a234/' target='_blank'><FaLinkedin className='linkedin' /></a>
                        <a href='https://twitter.com/KalNumbers' target='_blank'><FaTwitter className='twitter' /></a>
                    </div>
                </div>
            </motion.footer>
        </div>
    )
}

export default Footer