import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Cube({ cube, index }) {
    const [pageHeight, setPageHeight] = useState()

    useEffect(() => {
        setPageHeight(document.documentElement.scrollHeight)
    }, [])

    const { color, width, height, scrollFactor } = cube
    const { scrollY } = useViewportScroll();
    const left = Math.floor(Math.random() * -20)
    const right = Math.floor(Math.random() * -20)
    const top = Math.floor(Math.random() * 100)
    const y = useTransform(scrollY, [0, pageHeight], [0, scrollFactor]);
 
    return (
        <>
            <motion.span style={{ background: color, width: width, height: height, left: `${left}%`, top: `${top}%`, y: y }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1.5, transition: {duration: .2}}} viewport={{ once: true }} className='cube' ></motion.span>
            <motion.span style={{ background: color, width: width, height: height, right: `${right}%`, top: `${top}%`, y: y }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1.5,  transition: {duration: .2}}} viewport={{ once: true }} className='cube'></motion.span>
        </>
    )
} 
