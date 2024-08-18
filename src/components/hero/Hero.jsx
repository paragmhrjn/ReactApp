import React from "react";
import "./hero.scss";
import hero from "./img/hero.png"
import { RiScrollToBottomLine } from "react-icons/ri";
import { motion } from "framer-motion";
// eslint-disable-next-line 
const textVariants = {
    initial: {
        opacity: 0,
        x:-500,
        },
    anim: {
        x: 0,
        opacity:1,
        transition: {
            duration: 1,
            staggerChildern: 0.1,
        }
    },
    scrollbutton: {
        opacity: 0,
        y:10,
        transition: {
            duration:2,
            repeat:Infinity
        }
    }

}
export const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="anim">
            <motion.h2 variants={textVariants}>TECH DEV</motion.h2>
            <motion.h1 variants={textVariants}>Web Developer and Designer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button  variants={textVariants}>See the Latest Works</motion.button>
                <motion.button  variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.div variants={textVariants} animate="scrollbutton">
                <RiScrollToBottomLine size={50}   />
            </motion.div>
                
            </motion.div>
        </div>
            <div className="slidingTextContainer">
                Developer Writer Content Creator Influencer
            </div>
        <div className="imageContainer">
            <img src={hero} alt="" height={1000} />
        </div>
    </div>
  )
}
