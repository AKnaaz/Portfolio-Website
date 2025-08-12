import React from 'react';
import profile_pic from '../../assets/profilePic.jpeg';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaSquareTwitter } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div id='hero' className='w-full flex flex-col items-center gap-6 px-6 md:px-10 lg:px-20'>

            <img 
                src={profile_pic} 
                alt="profile_pic" 
                className='w-40 h-40 md:w-48 md:h-48 rounded-full mt-20 md:mt-[150px] border-2 border-pink-600'
            />

            <h1 className='text-center text-3xl md:text-4xl font-bold text-pink-600 w-full sm:w-[70%]'>
                Frontend Developer
            </h1>

            <p className='text-center text-base md:text-lg leading-[25px] w-full sm:w-3/4 md:w-1/2 text-gray-900'>
                Hi! I'm Nazat Akter, a passionate Frontend Developer who 
                <br className="hidden sm:block" /> 
                loves crafting beautiful and responsive websites.
            </p>

            
            <div className='flex gap-4 mt-4 items-center'>
                <a href="https://www.linkedin.com/in/nazatakter-dev">
                    <BsLinkedin className='text-blue-600' size={25}/>
                </a>
                <a href="https://x.com/Moontahasafiq?t=EgQaJ4RVJi7uL_xw4MGO3Q&s=08">
                    <FaSquareTwitter className='text-blue-600' size={25}/>
                </a>
                <a href="https://github.com/AKnaaz">
                    <FaGithub size={25}/>
                </a>
            </div>

            <button className='btn rounded-[50px] px-6 py-2 bg-pink-600 text-white transition-transform duration-500 hover:scale-105 mt-5'>
                Resume
            </button>
        </div>
    );
};

export default Hero;
