import {React, useState, useEffect} from 'react'
import "./cursor.scss";
import { motion } from 'framer-motion';
export const Cursor = () => {
    const [position, setPostion] = useState({x:0,y:0})

    useEffect(()=>{
        const mouseMove = (e) => {
            setPostion({x:e.clientX,y:e.clientY})
        }
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    console.log(position)
  return (
    <motion.div className='cursor' animate={{x:position.x+15, y:position.y+5}}></motion.div>
  )
}
