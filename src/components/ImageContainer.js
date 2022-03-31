import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function ImageContainer(props) {
  let year = props.year;

  return (
    <div className='image'>
      <motion.h2>
        {props.year &&
          year.split("").map((char, index) => {
            return (
              <motion.span transition={{ delay: 0.1 * index }} initial={{ y: 60 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
                {char}
              </motion.span>
            )
          })}
      </motion.h2>
      {props.img && 
        <motion.img initial={{y: 100, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition: { duration: .4, delay: .1}}} viewport={{ once: true }} src={require(`../img/${props.img.src}`)} alt={props.img.alt} />
      }
    </div>
  )
}