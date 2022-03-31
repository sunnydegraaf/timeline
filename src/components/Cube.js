import React from 'react'
import { motion } from 'framer-motion'

export default function Cube({ cube, index }) {

    const { color, width, height } = cube
    const left = Math.floor(Math.random() * -20)
    const right = Math.floor(Math.random() * -20)
    const top = Math.floor(Math.random() * 100)


    return (
        <>
            <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1.5, transition: {duration: .2}}} className='cube' style={{ background: color, width: width, height: height, left: `${left}%`, top: `${top}%` }}></motion.span>
            <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 2.5,  transition: {duration: .2}}} className='cube' style={{ background: color, width: width, height: height, right: `${right}%`, top: `${top}%` }}></motion.span>
        </>

    )
}
