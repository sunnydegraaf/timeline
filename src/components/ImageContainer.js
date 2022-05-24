import React, { useRef, useState, useEffect } from 'react'
import { motion } from "framer-motion"

export default function ImageContainer(props) {

  const [animate, setAnimate] = useState(false);
  const [hovered, setHovered] = useState(false);
  let year = props.year;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
        <motion.img 
          onMouseOver={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)} 
          initial={{y: 100, opacity: 0}} 
          whileInView={{ y: 0, opacity: 1, transition: { duration: .4, delay: .1}}} 
          exit={{ x: 0, opacity: 0 }}
          viewport={{ once: true }} src={require(`../img/${props.img.src}`)} 
          alt={props.img.alt} 
        />
      }
    </div>
  )
}