import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='Main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]'
                src='https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg?w=1380&t=st=1717676410~exp=1717677010~hmac=ea3ab37ef8ba5b9585a436d28300cc2b45617628f64f426feb13f42532254a24'
                alt='/'
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>i am Dixit</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        i'am a
                        <TypeAnimation
                            sequence={[
                                'Devloper',
                                2000,
                                'Coder',
                                2000,
                                'tech enthusiast',
                                2000,
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20} />
                        <FaFacebookF className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main
