import React from 'react'
import ProjectItem from './ProjectItem'
import amezonImg from '../assets/amezon.jpg'
import cryptoImg from '../assets/crypto.jpg'
import netflixImg from '../assets/netflix.jpg'
import mapsImg from '../assets/maps.jpg'

const Project = () => {
    return (
        <div id='projects' className='max-w[1040px] m-auto md:pl-20 p-4 py-15'>
            <h1 className='text-4xl font-bold text-center text-blue-800'>projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum, dolor sit amet
                 consectetur adipisicing elit. Animi tenetur 
                 dolore voluptas doloribus totam architecto quod cum eaque 
                 veritatis. Sit sequi accusamus incidunt autem, similique provident 
                 eius consequuntur quidem culpa.
                 </p>
                 <div className='grid sm:grid-cols-2 gap-12'>
                    <ProjectItem img={amezonImg} title='cyrpto App'/>
                    <ProjectItem  img={cryptoImg} title='amezon App'/>
                    <ProjectItem img={netflixImg} title='netflix App'/>
                    <ProjectItem img={mapsImg} title='map App'/>

                 </div>
                 
        </div>

    )
}

export default Project
    