import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function ImageContainer(props) {

  const { ref, inView } = useInView()

  const animation = useAnimation();

  useEffect(() => {
    console.log("Use effect hook, inView =", inView);
    if(inView) {
      animation.start({
        x: 0,
        transition: {
          delay: 0.1,
          type: 'spring',
          duration: 1,
          bounce: 0.3
        }
      })
    }
    if(!inView) {
      animation.start({
        x: -100
      })
    }
  }, [inView])

  let year = props.year;

  const sentence = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        type: "spring",
        bounce: 0.5
      }
    }
  }

  const letter = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }

  return (
    <div className='image' ref={ref}>
      <motion.h2
        animate={animation}
      >
        {props.year &&
          year.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
      </motion.h2>
      {props.img && <img src={require(`../img/${props.img.src}`)} alt={props.img.alt} />}
    </div>
  )
}