import React from 'react'
import './about.css'
import mypicture from '../../assets/mypicture/caleb.jpg'
import { FaHtml5, FaCss3, FaPython, FaBootstrap, FaSass, FaReact } from 'react-icons/fa'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
    })

    const show = useAnimation()

    useEffect(() => {
        if (inView) {
            show.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    type: 'tween'
                }
            })
        }

        if (!inView) {
            show.start({
                y: 100,
                opacity: 0,
                transition: {
                    duration: 0.5,
                }
            })
        }
    }, [inView])
    return (
        <div ref={ref} className='main-about-container'>
            <motion.section className='about' animate={show}>
                <div className='image-container'>
                    <div className='image-border'></div>
                    <img src={mypicture} alt='picture of me' className='image' />
                </div>

                <div className='article-container'>
                    <article className='about-article'>
                        <p>I am a software developer from <span className='inner-article'>Nigeria</span>, I have over 1 year software experience, and in that time i have built different applications, ranging from basic to fairly complex, and oh, did i mention i specialize mainly in the <span className='inner-article'>Frontend</span>.</p>
                        <p>I really enjoy learning new things and in the space of 1 year i have aquired a bunch of skills to help cement my place in the frontend world.</p>
                    </article>
                </div>
            </motion.section>

            <section className='skills-section'>
                <div className='skills-container'>
                    <h1>SKILLS:</h1>
                    <div className='skills'>
                        <div><FaHtml5 className='html' />HTML</div>
                        <div><FaCss3 className='css' />CSS</div>
                        <div><FaSass className='sass' />SASS</div>
                        <div>JAVASCRIPT</div>
                        <div><FaPython className='python' />PYTHON</div>
                        <div><FaReact className='react' />REACT</div>
                        <div><FaBootstrap className='bootstrap' />BOOTSTRAP</div>
                    </div>

                    <div className='others'>
                        <h2>I also have experience working with:</h2>
                        <div className='other-skills'>
                            <div>APIs</div>
                            <div>FRAMER-MOTION</div>
                            <div>GSAP</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About 