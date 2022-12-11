import React from 'react'
import { motion } from 'framer-motion'
import './home.css'

const Home = () => {

    const parentVariant = {

        hidden: {
            y: -100,
            opacity: 0,
        },

        visible: {
            y: 0,
            opacity: 1,

            transition: {
                type: 'tween',
                staggerChildren: 0.2,
                duration: 1.5,
            }
        }
    }

    const childVariant2 = {
        hidden: {
            y: -150,
            opacity: 0
        },

        visible: {
            y: 0,
            opacity: 1,

            transition: {
                type: 'spring',
            }
        }
    }

    return (
        <motion.main>
            <motion.div className='mainContainer'>
                <motion.h1 className='hello' variants={parentVariant} initial='hidden' animate='visible'>HELLO!</motion.h1>
                <motion.span className='what-i-am' variants={parentVariant} initial='hidden' animate='visible'>I AM A</motion.span>
                <motion.div className='job-title'>
                    <motion.div className='frontend' variants={parentVariant} initial='hidden' animate='visible'>
                        <motion.p variants={childVariant2}>S</motion.p>
                        <motion.p variants={childVariant2}>O</motion.p>
                        <motion.p variants={childVariant2}>F</motion.p>
                        <motion.p variants={childVariant2}>T</motion.p>
                        <motion.p variants={childVariant2}>W</motion.p>
                        <motion.p variants={childVariant2}>A</motion.p>
                        <motion.p variants={childVariant2}>R</motion.p>
                        <motion.p variants={childVariant2}>E</motion.p>
                    </motion.div>
                    <motion.div className='developer' variants={parentVariant} initial='hidden' animate='visible'>
                        <motion.p variants={childVariant2}>D</motion.p>
                        <motion.p variants={childVariant2}>E</motion.p>
                        <motion.p variants={childVariant2}>V</motion.p>
                        <motion.p variants={childVariant2}>E</motion.p>
                        <motion.p variants={childVariant2}>L</motion.p>
                        <motion.p variants={childVariant2}>O</motion.p>
                        <motion.p variants={childVariant2}>P</motion.p>
                        <motion.p variants={childVariant2}>E</motion.p>
                        <motion.p variants={childVariant2}>R</motion.p>
                    </motion.div>
                </motion.div>
                <motion.span className='location' initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 2, type: 'spring' } }}>FROM ABUJA, NIGERIA</motion.span>
                <span className='welcome'>WELCOME TO MY WEBSITE</span>
            </motion.div>
        </motion.main>
    )
}

export default Home