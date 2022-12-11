import React, { useRef, useState } from 'react'
import './work.css'
import { motion } from 'framer-motion'
// landing pages
import { blogr, insure, loop } from '../../assets/index'
// webapps
import { shopping, space } from '../../assets/index'
// multi page
import { calculator, CardDetails, Dictionary, Trivia } from '../../assets/index'
import { FaArrowCircleDown } from 'react-icons/fa'

import Workcomponent from '../../subComponent/Workcomponent/Workcomponent'

const Work = () => {

    const scrollRef = useRef(null)

    const variant = {
        hidden: {
            x: 100,
            opacity: 0
        },

        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1,
                staggerChildren: 0.2
            }
        }
    }

    const childVariant = {
        hidden: {
            x: 100,
            opacity: 0
        },

        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const variant1 = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1,
                staggerChildren: 0.2
            }
        }
    }

    const childVariant1 = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const scrollVariant = {
        hidden: {
            y: -50,
            x: -100,
            opacity: 0

        },

        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 0.7,
                delay: 0.5

            }
        }
    }

    const [landing, setLanding] = useState(false)
    const [apps, setApps] = useState(false)
    const [mPages, setMPages] = useState(false)

    const landingPage = () => {
        setLanding(prevState => !prevState)
        setApps(false)
        setMPages(false)
    }

    const webapps = () => {
        setApps(prevState => !prevState)
        setLanding(false)
        setMPages(false)
    }

    const multiPage = () => {
        setMPages(prevState => !prevState)
        setLanding(false)
        setApps(false)
    }

    return (
        <motion.div className='work-section-container' exit={{ opacity: 0, transition: { duration: 1 } }}>
            <motion.main className='work-section' initial={{ scale: 0.5, opacity: 0.5 }} animate={{ scale: 1, opacity: 1, transition: { type: 'tween', duration: 1 } }}>
                <h1 className='work-header'>PROJECTS</h1>
                <span className='work__sub-header'>Some projects i have worked on</span>
                <motion.h2 className='click' initial={{ opacity: 1 }} animate={{ opacity: 0, transition: { type: 'tween', repeat: Infinity, duration: 0.5 } }} >CLICK</motion.h2>
                <FaArrowCircleDown className='clickArrow' />
                <div className='work__category'>

                    <div className='category-container'>
                        <motion.span className='category' initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1 }} onClick={landingPage}>LANDING<br />PAGE
                        </motion.span>
                    </div>

                    <div className='category-container'>
                        <motion.span className='category' initial={{ scale: 1 }} whileHover={{ scale: 1.12 }} onClick={webapps}>WEB APPS</motion.span>
                    </div>


                    <div className='category-container'>
                        <motion.span className='category' initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} onClick={multiPage}>MULTI <br /> PAGE</motion.span>
                    </div>
                </div>

                {/* Desktop Version */}
                {/*landing page */}
                {landing && (
                    <motion.div className='all-projects' variants={variant} initial='hidden' animate='visible'>
                        <motion.div className='project-container' variants={childVariant} >
                            <motion.img src={blogr} alt='blogr landing page' className='html__project-image' />
                            <h1>Blogr</h1>
                            <a href='https://blogr-react-landing-page.netlify.app/' target='_blank'>https://blogr-react-landing-page.netlify.app/</a>
                        </motion.div>

                        <motion.div className='project-container' variants={childVariant}>
                            <img src={loop} alt='Loop studios landing page' className='html__project-image' />
                            <h1>Loop Studios</h1>
                            <a href='https://looplanding-page.netlify.app/' target='_blank'>https://looplanding-page.netlify.app/</a>
                        </motion.div>


                        <motion.div className='project-container' variants={childVariant} >
                            <img src={insure} alt='Insure landing page' className='html__project-image' />
                            <h1>Insure</h1>
                            <a href='https://insure-page-kal.netlify.app/' target='_blank'>https://insure-page-kal.netlify.app/</a>
                        </motion.div>
                    </motion.div>
                )}

                {/*Web apps */}
                {apps && (
                    <motion.div className='all-projects' variants={variant1} initial='hidden' animate='visible'>
                        <motion.div className='project-container' variants={childVariant} >
                            <img src={calculator} alt='Calculator' className='html__project-image' variants={childVariant} />
                            <h1>Advanced Calculator</h1>
                            <a href='https://calculator-fem.netlify.app/' target='_blank'>https://calculator-fem.netlify.app/</a>
                        </motion.div>

                        <motion.div className='project-container' variants={childVariant}>
                            <img src={CardDetails} alt='Card detail app' className='html__project-image' />
                            <h1>Card Details verification</h1>
                            <a href='https://calebvalidation.netlify.app' target='_blank'>https://calebvalidation.netlify.app</a>
                        </motion.div>


                        <motion.div className='project-container' variants={childVariant} >
                            <img src={Dictionary} alt='Dictionary app' className='html__project-image' />
                            <h1>Dictionary App</h1>
                            <a href='https://dictionary-rec-app.netlify.app/' target='_blank'>https://dictionary-rec-app.netlify.app/</a>
                        </motion.div>

                        <motion.div className='project-container' variants={childVariant} >
                            <img src={Trivia} alt='Tivia app' className='html__project-image' />
                            <h1>Trivia App</h1>
                            <a href='https://trivquest.netlify.app/' target='_blank'>https://trivquest.netlify.app/</a>
                        </motion.div>
                    </motion.div>
                )}

                {/*Multi pages */}
                {mPages && (
                    <motion.div className='all-projects' variants={variant} initial='hidden' animate='visible'>
                        <motion.div className='project-container' variants={childVariant} >
                            <img src={shopping} alt='Shopping website' className='html__project-image' />
                            <h1>Shopping Website</h1>
                            <a href='https://shopping-web-qtr.netlify.app/' target='_blank'>https://shopping-web-qtr.netlify.app/</a>
                        </motion.div>

                        <motion.div className='project-container' variants={childVariant}>
                            <img src={space} alt='Space travel program' className='html__project-image' />
                            <h1>Space Travel Program</h1>
                            <a href='https://spacetravelpro.netlify.app/' target='_blank'>https://spacetravelpro.netlify.app/</a>
                        </motion.div>
                    </motion.div>
                )}

                {/* Mobile Version */}

                <div className='project__mobile-version'>
                    <h2>Landing Page</h2>

                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={blogr}
                                title='Blogr'
                                link='https://blogr-react-landing-page.netlify.app/'
                                to='https://blogr-react-landing-page.netlify.app/' />
                        </motion.div>
                    </div>

                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={insure}
                                title='Insure'
                                link='https://insure-page-kal.netlify.app/'
                                to='https://insure-page-kal.netlify.app/' />

                        </motion.div>
                    </div>

                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={loop}
                                title='Loop'
                                link='https://looplanding-page.netlify.app/'
                                to='https://looplanding-page.netlify.app/' />

                        </motion.div>
                    </div>

                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={calculator}
                                title='Advanced Calculator'
                                link='https://calculator-fem.netlify.app/'
                                to='https://calculator-fem.netlify.app/' />

                        </motion.div>
                    </div>

                    <h2>Web Apps</h2>
                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={CardDetails}
                                title='Card Details Verification'
                                link='https://calebvalidation.netlify.app'
                                to='https://calebvalidation.netlify.app' />

                        </motion.div>
                    </div>

                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={Dictionary}
                                title='Dictionary App'
                                link='https://dictionary-rec-app.netlify.app/'
                                to='https://dictionary-rec-app.netlify.app/' />

                        </motion.div>
                    </div>

                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={Trivia}
                                title='Trivia App'
                                link='https://trivquest.netlify.app/'
                                to='https://trivquest.netlify.app/' />

                        </motion.div>
                    </div>

                    <h2>Multi page</h2>
                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={shopping}
                                title='Shopping Website'
                                link='https://shopping-web-qtr.netlify.app/'
                                to='https://shopping-web-qtr.netlify.app/' />

                        </motion.div>
                    </div>

                    <div ref={scrollRef}>
                        <motion.div variants={scrollVariant} initial='hidden' whileInView='visible' viewPort={{ once: true, root: scrollRef }}>
                            <Workcomponent image={space}
                                title='Space Travel Program'
                                link='https://spacetravelpro.netlify.app'
                                to='https://spacetravelpro.netlify.app' />

                        </motion.div>
                    </div>
                </div>
            </motion.main>
        </motion.div>
    )
}

export default Work