import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import p1 from '../Assets/p1.jpeg';
import p2 from '../Assets/p2.jpeg';

const teamMembers = [
    {
        name: 'Selva',
        role: 'Developer',
        image: p1,  
        linkedin: 'https://linkedin.com/in/selva',
        twitter: 'https://twitter.com/selva',
        github: 'https://github.com/selva'
    },
    {
        name: 'Shankar',
        role: 'Designer',
        image: p2, 
        linkedin: 'https://linkedin.com/in/shankar',
        twitter: 'https://twitter.com/shankar',
        github: 'https://github.com/shankar'
    }
];

export function TeamPage() {
    return (
        <div className="container mx-auto px-4 py-8" id='Team'>
            <h1 className="text-2xl lg:text-4xl text-center text-blue-gray-900 mb-6">Meet Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamMembers.map((member) => (
                    <div key={member.name} className="bg-white shadow-sm rounded-lg overflow-hidden max-w-xs mx-auto">
                        <div className="flex justify-center mt-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-semibold mb-1">{member.name}</h2>
                            <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                            <div className="flex justify-center gap-3">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-xl text-blue-600 hover:text-blue-800" />
                                </a>
                                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-xl text-blue-400 hover:text-blue-600" />
                                </a>
                                <a href={member.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-xl text-gray-700 hover:text-gray-900" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamPage;
