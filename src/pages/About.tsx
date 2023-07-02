import React from 'react';
import { FaLeaf, FaCodeBranch } from 'react-icons/fa';
import SkillsDisplay from '../components/skills'; // the correct path to your SkillsDisplay component

const About: React.FC = () => {
    return (
        <div id="about" className="p-5 flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
            <div className="flex-1">
                <img
                    src="https://via.placeholder.com/300"
                    alt="Your face"
                    className="w-full object-cover rounded shadow-lg"
                />
            </div>
            <div className="flex-1 space-y-5">
                <h2 className="text-2xl font-bold flex items-center">
                    <FaLeaf className="text-green-500 mr-2" /> Biology &nbsp;
                    <FaCodeBranch className="text-blue-500 mr-2" /> Coding
                </h2>
                <p className="text-lg">I'm Ryan D'Onofrio, a third year PhD student who found his true passion in software development. We are at a critical juncture point in new technologies and I believe I can make an impact.</p>
                <p className="text-lg">Having a strong background in biology allows me to approach problems with a unique perspective. Combined with my coding skills, this enables me to create innovative and impactful solutions.</p>

                <h2 className="text-2xl font-bold flex items-center">
                    My Skills
                </h2>
                <SkillsDisplay />
            </div>
        </div>
    );
};

export default About;
