import {React,  useRef } from 'react';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/3573383/pexels-photo-3573383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora error eaque ad nesciunt cumque laudantium quas est, laborum quae culpa dicta! Magnam eos reiciendis fugiat eveniet exercitationem blanditiis assumenda libero!",
    },
    {
        id:2,
        title:"React Blog",
        img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora error eaque ad nesciunt cumque laudantium quas est, laborum quae culpa dicta! Magnam eos reiciendis fugiat eveniet exercitationem blanditiis assumenda libero!",
    },
    {
        id:3,
        title:"React Music",
        img:"https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora error eaque ad nesciunt cumque laudantium quas est, laborum quae culpa dicta! Magnam eos reiciendis fugiat eveniet exercitationem blanditiis assumenda libero!",
    },
    {
        id:4,
        title:"React Health",
        img:"https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora error eaque ad nesciunt cumque laudantium quas est, laborum quae culpa dicta! Magnam eos reiciendis fugiat eveniet exercitationem blanditiis assumenda libero!",
    },

];

const Single = ({item}) =>{
    const ref = useRef();
    const { scrollYProgress } = useScroll({target:ref,});
    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContain" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See More</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
export const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({target:ref, offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Feature Works</h1>
            <motion.div className="progressBar" style={{scaleX}}></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
    
  )
}
