import { React, useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform} from 'framer-motion';
import Planet from "../../images/planets.png";
import Sun from "../../images/sun.png";
export const Parallax = ({type}) => {
  const ref = useRef();
   const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className='parallax' ref={ref} style={{background:type==="services"? "linear-gradient(180deg, #111132, #0c0c1d": "linear-gradient(180deg, #111132, #505064"}}>
        <motion.h1 style={{y: yText}}>{type==="services" ? "What We Do?" : "What We Did?"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y: yBg, backgroundImage: `url(${type==="services"? Planet:Sun})`,}}></motion.div>
        <motion.div className="stars" style={{x: yBg}}></motion.div>
    </div>
  )
}
