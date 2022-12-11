import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [navActive, setNavActive] = useState(false)
    const [show, setShow] = useState(true)

    const onScroll = () => {
        if (window.scrollY > 0) {
            setNavActive(true)
        } else {
            setNavActive(false)
        }
    }

    window.addEventListener('scroll', onScroll)

    const toggleNav = () => {
        setNav(prevState => !prevState)
        setShow(true)
    }

    // state SETSHOW is set to false so we can be able to collapse the navbar when navigating to another page 
    const navClick = () => {
        setNav(false)
        setShow(false)
    }

    return (
        <nav className={navActive ? 'nav-active' : ''}>

            <div className='header'>
                <Link to='/' style={{ textDecoration: 'none', zIndex: 1000 }}><h1 className='name'>CALEB OCHAI</h1></Link>

                <div className='links'>
                    <NavLink to='/resume'> RESUME</NavLink>
                    <NavLink to='/work'>WORK</NavLink>
                </div>

                {/* Animation of the Hamburger menu */}
                {
                    nav ? <motion.div className='hamburger' onClick={toggleNav}>
                        <motion.span
                            animate={{
                                rotate: 40,
                                y: 7,
                                transition:
                                    { duration: 0.4 }
                            }}></motion.span>

                        <motion.span
                            animate={{ opacity: 0 }}>
                        </motion.span>

                        <motion.span
                            animate={{ rotate: -40, y: -8, transition: { duration: 0.4 } }}>
                        </motion.span>
                    </motion.div> :

                        <motion.div className='hamburger' onClick={toggleNav}>
                            <motion.span animate={{
                                rotate: 0,
                                y: 0,
                                transition:
                                    { duration: 0.4 }
                            }}></motion.span>
                            <span></span>
                            <motion.span animate={{ rotate: 0, y: 0, transition: { duration: 0.4 } }}></motion.span>
                        </motion.div>
                }
            </div >


            {/* When the state is true (triggered by the navClick function above) the navbar is rendered and collapse when it is false*/}
            {show && (<AnimatePresence>
                {nav && (<motion.div className='mobileNav'
                    initial={{ opacity: 0, y: -1000 }}
                    animate={{
                        opacity: 1, y: 0,
                        transition: { duration: 0.5 }
                    }}
                    exit={{ x: -1000, opacity: 0, transition: { duration: 0.5 } }}>

                    <Link to='/resume' style={{ textDecoration: 'none' }} onClick={navClick}><h2>RESUME</h2></Link>
                    <Link to='/work' style={{ textDecoration: 'none' }} onClick={navClick}><h2>WORK</h2></Link>
                </motion.div>)}
            </AnimatePresence>)}

        </nav >
    )
}

export default Navbar