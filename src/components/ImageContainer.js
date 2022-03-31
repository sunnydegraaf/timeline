import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function ImageContainer(props) {

  const { ref, inView } = useInView({
    threshold: 0.2
  })

  const textAnimation = useAnimation();
  const imageAnimation = useAnimation();

  useEffect(() => {
    if(inView) {
      textAnimation.start({
        y: 0,
      })

      imageAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: .4,
          delay: .1
        }
      })
    }
    if(!inView) {
      textAnimation.start({
        y: 60
      })

      imageAnimation.start({
        opacity: 0,
        y: 100
      })
    }
  }, [inView])

  let year = props.year;

  return (
    <div className='image' ref={ref}>
      <motion.h2>
        {props.year &&
          year.split("").map((char, index) => {
            return (
              <motion.span transition={{delay: 0.1 * index}} animate={textAnimation}>
                {char}
              </motion.span>
            )
          })}
      </motion.h2>
      {props.img && <motion.img animate={imageAnimation} src={require(`../img/${props.img.src}`)} alt={props.img.alt} />}
    </div>
  )
}