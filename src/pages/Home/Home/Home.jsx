import React from 'react';
import Hero from '../../../Components/Hero/Hero';
import About from '../../../Components/About/About';
import Skills from '../../../Components/Skills/Skills';
import Projects from '../../../Components/Projects/Projects';
import Contact from '../../../Components/Contact/Contact';

const Home = () => {
    return (
        <div id='home'>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;