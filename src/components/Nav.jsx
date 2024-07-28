import React ,{useState}from 'react'
import {AiOutlineHome, AiOutlineMenu,AiOutlineProject,AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'

const Nav = () => {

    const[Nav,setnav]=useState(false)
    const handlenaV=()=>{
        setnav(!Nav);   
 };
  return (
    <div>
      <AiOutlineMenu onClick={handlenaV} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        Nav ?  (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a  onClick={handlenaV} href="#main"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cusor-pointer hover:scale-110'>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'> Home</span> 
                </a>
                <a onClick={handlenaV} href="#work"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cusor-pointer hover:scale-110'>
                    <GrProjects size={20}/>
                    <span className='pl-4'> Work</span> 
                </a>
                <a  onClick={handlenaV}href="#projects"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cusor-pointer hover:scale-110'>
                    <AiOutlineProject size={20}/>
                    <span className='pl-4'> Projects</span> 
                </a>
                <a onClick={handlenaV} href="#main"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cusor-pointer hover:scale-110'>
                    <BsPerson size={20}/>
                    <span className='pl-4'> resume</span> 
                </a>
                <a onClick={handlenaV} href="#contacts"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cusor-pointer hover:scale-110'>
                    <AiOutlineMail size={20}/>
                    <span className='pl-4'> Contect</span> 
                </a>
            </div>
        )
        :(
          null
        )
      }
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <AiOutlineHome size={20}/>
            </a>
            <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <GrProjects size={20}/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <AiOutlineProject size={20}/>
            </a>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <BsPerson size={20}/>
            </a>
            <a href="#contacts" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <AiOutlineMail size={20}/>
            </a>
          </div>
        </div>






    </div>
  )
}

export default Nav
