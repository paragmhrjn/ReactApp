import React from 'react';
import "./navbar.scss";
import { FaFacebook, FaInstagram, FaYoutube, FaDribbble} from "react-icons/fa";

function Navbar() {

    return (
        <div className='navbar'>
            {/* Sidebar */}
            <div className='wrapper'>
                <span>Tech Dev</span>
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