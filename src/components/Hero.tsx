// src/pages/Hero.tsx

import React from 'react';
import { FaCode, FaBiohazard } from 'react-icons/fa';
import ThreeScene from '../components/ThreeScene';

const Hero: React.FC = () => {
    return (
        <div id="hero" className="relative h-screen flex items-center justify-center text-center">
            <ThreeScene />
            <div className="absolute z-10 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-green-400 outline-black">Ryan D'Onofrio</span></h1>
                <p className="text-xl md:text-3xl mb-10">A <span className="text-green-400 outline-white">Biologist</span> Turned <span className="text-green-400">Programmer</span></p>
                <a href="#about" className="py-2 px-4 bg-purple-600 hover:bg-purple-700 transition duration-200 rounded text-white inline-flex items-center">
                    <FaBiohazard className="mr-2" /> Discover More
                </a>
            </div>
        </div>
    );
};

export default Hero;
