import React from 'react';
import profile_pic from '../../assets/profilePic.jpeg';

const Hero = () => {
    return (
        <div className='flex items-center flex-col gap-6'>

            <img src={profile_pic} alt="profile_pic" className='w-50 h-50 rounded-full mt-[150px]'/>

            <h1 className='text-center text-5xl font-bold w-[70%]'
            style={{
                background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
            >Frontend Developer</h1>

            <p className='text-center text-[16px] leading-[25px] w-1/2'>Hi! I'm Nazat Akter, a passionate Frontend Developer who <br /> loves crafting beautiful and responsive websites. I enjoy working with <br /> React and Tailwind CSS to build clean and user-friendly interfaces.</p>
            <button className='btn rounded-[50px] px-6 py-2 bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] transition-transform duration-500 hover:scale-105 mt-5'>Resume</button>
        </div>
    );
};

export default Hero;