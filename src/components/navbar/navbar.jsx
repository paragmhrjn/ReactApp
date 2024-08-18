import React from 'react';
import "./navbar.scss";
import { FaFacebook, FaInstagram, FaYoutube, FaDribbble} from "react-icons/fa";
import { motion } from 'framer-motion';
import Siderbar from '../sidebar/Siderbar';
function Navbar() {

    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Siderbar/>
            <div className='wrapper'>
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 1}}>TECH DEV</motion.span>
                <div className="social">
                    <a href='/'><FaFacebook /></a>
                    <a href='/'><FaInstagram/></a>
                    <a href='/'><FaYoutube/></a>
                    <a href='/'><FaDribbble/></a>
                </div>

            </div>
        </div>
    );
}
export default Navbar;