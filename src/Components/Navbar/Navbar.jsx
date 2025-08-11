import React from 'react';
import logo from '../../assets/portfolio-logo.jpg';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between my-5 mx-[170px]'>
            <img src={logo} alt="portfolio-logo" className='w-10 h-10 rounded-full'/>
            <ul className="font flex items-center gap-8 text-[15px]">
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <button className='btn rounded-[50px] px-6 py-2 bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] transition-transform duration-500 hover:scale-105'>Resume</button>
        </div>
    );
};

export default Navbar;