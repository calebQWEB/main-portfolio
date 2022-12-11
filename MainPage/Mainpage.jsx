import React from 'react'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Linkto from '../components/LinkTo/Linkto'
import Email from '../components/Email/Email'
import { motion } from 'framer-motion'

const Mainpage = () => {
    return (
        <motion.div exit={{ opacity: 0, transition: { duration: 1 } }}>
            <Home />
            <About />
            <Linkto />
            <Email />
        </motion.div>
    )
}

export default Mainpage