import React from 'react';   
import WorkItem from './WorkItem';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ``

const data = [
    {
        year: 2020,
        title: 'Technical Skills',
        duration: "Programming Languages: Master multiple programming languages relevant to your area of work e.g., Python, Java, C++, JavaScript Algorithms and Data Structures: Understand fundamental algorithms and data structures to write efficient and optimized code",
        details: 'first react+vite project'
    },
    {
        year: 2020,
        title: 'Problem-Solving Skills',
        duration: 'Analytical Thinking: Develop strong analytical skills to break down complex problems into manageable components.Debugging: Hone your debugging skills to efficiently identify and fix issues in the code.',
        details: 'first react+vite project'
    },
    {
        year: 2020,
        title: 'Continuous Learning',
        duration: 'Stay Updated: Follow industry trends, read tech blogs, and participate in online communities like Stack Overflow, GitHub, and Reddit. Online Courses and Certifications: Enroll in online courses and earn certifications from platforms like Coursera, Udacity, edX, and Udemy.',
        details: 'first react+vite project'
    },
    {
        year: 2020,
        title: 'Soft Skills',
        duration: 'Adaptability: Be adaptable to changing technologies and work environments.Critical Thinking: Apply critical thinking to evaluate solutions and make informed decisions.',
        details: 'first react+vite project'
    },
];

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-black'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details} />
            ))}
        </div>
    );
};
export default Work;
