import { motion } from "framer-motion"
import { useState } from "react"

export default function Content(props) {

  const [expanded, setExpanded] = useState(false);
  
  console.log(props)

  const iconVariants = {
    closed: {  rotate: 90 },
    open: {  rotate: 0 },
  }

  const divVariants = {
    closed: {  opacity: 0, height: '0px' },
    open: {  opacity: 1, height: '100%' },
  }

  return (
    <div className='content'>
      {props.title && <h2>{props.title}</h2>}
      {props.body && props.body.map(element => {
        return <p>{element}</p>
      })}
      { props.link && <a href={props.link.href}>{props.link.text}</a> }
      {props.readMore &&
        <div className='read-more'>
          <span onClick={() => setExpanded(!expanded)}>
            <i>
              <motion.svg 
                style={{originX: 0.48}}
                animate={expanded ? "open" : "closed"}
                variants={iconVariants}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 3.95"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="15" height="3.95"/></g></g></motion.svg>
              <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 3.95"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="15" height="3.95"/></g></g></motion.svg>
            </i>Lees meer</span>       
              <motion.div 
                className='container'
                animate={expanded ? "open" : "closed"}
                variants={divVariants}
              >
                {props.readMore.map(element => {
                  return <p>{element}</p>
                })}
              </motion.div>
        </div>
      }
    </div>
  )
}