import React from 'react'
import { motion } from 'framer-motion'
import './workcomponent.css'

const Workcomponent = (props) => {
    return (
        <motion.div className='work-component-container'>
            <motion.div className='work-component'>
                <img src={props.image} alt='project picture' className='image' />
                <h1>{props.title}</h1>
                <a href={props.link} target='_blank'>{props.to}</a>
            </motion.div>
        </motion.div>
    )
}

export default Workcomponent