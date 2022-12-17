import React from 'react'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Linkto from '../components/LinkTo/Linkto'
import Email from '../components/Email/Email'
import { motion } from 'framer-motion'

const Mainpage = () => {
    console.log('Hey, wonderful people, thank you for checking out my website, I think the site is pretty cool and if you think thesame you can head over to my github and check out the source code and how everything works. the link to my gitub is in the foother section.')
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