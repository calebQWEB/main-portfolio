import React from 'react'
import './linkto.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Linkto = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
    })


    const animation = useAnimation()
    const animations = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: { type: 'tween', duration: 0.5 }
            })
        }

        if (!inView) {
            animation.start({
                opacity: 0,
                y: 100,
                transition: {
                    duration: 1
                }
            })
        }

    }, [inView])

    useEffect(() => {
        if (inView) {
            animations.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'tween',
                    delay: 0.8,
                    duration: 0.5
                }
            })
        }

        if (!inView) {
            animations.start({
                opacity: 0,
                y: 50,
                transition: {
                    duration: 1
                }
            })
        }
    }, [inView])

    return (
        <div ref={ref} className='linkto-container'>
            <motion.section className='linkto-section' animate={animation}>
                <div className='workLink' ref={ref}>
                    <motion.article className='link-article' animate={animations}>
                        <h1>MY PROJECTS</h1>
                        <p>Check out some of the projects i've worked on.</p>
                        <Link to='/work' style={{ textDecoration: 'none' }}><button type='button'>GO TO<FaLongArrowAltRight className='arrow' /></button></Link>
                    </motion.article>
                </div>
                <div className='line'></div>
                <div className='resumeLink'>
                    <motion.article className='link-article' animate={animations}>
                        <h1>MY RESUME</h1>
                        <p>Know me on a deeper level, and checkout my resume.</p>
                        <Link to='/resume' style={{ textDecoration: 'none' }}><button type='button'>GO TO<FaLongArrowAltRight className='arrow' /></button></Link>
                    </motion.article>
                </div>
            </motion.section>
        </div>
    )
}

export default Linkto