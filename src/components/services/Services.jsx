import {React, useRef} from 'react'
import "./services.scss"
import { motion, useInView} from 'framer-motion'
import people from "../../images/people.webp"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


export const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: '-100px'})
  return (
    <motion.div className='services' variants={variants} initial="initial"
    //   whileInView={"animate"}
      //animate={"animate"}
      ref={ref} animate={isInView && "animate"}
      >
        <motion.div className="textsContainer" variants={variants}> 
            <p>I focus on helping your brand grow <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src={people} alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Develop a strong brand identity that reflects your values and mission</p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Develop a strong brand identity that reflects your values and mission</p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Develop a strong brand identity that reflects your values and mission</p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Develop a strong brand identity that reflects your values and mission</p>
                <button>GO</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
