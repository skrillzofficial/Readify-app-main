import React from 'react'
import firstImage from '../assets/hero3.jpeg'
import secondImage from '../assets/hero2.jpeg'
// create your hero section here
const Hero = () => {
  return (
    <div className='flex justify-between items-center px-5 py-5'>
      {/* First side */}
      <div className='flex flex-col w-full gap-5 md:gap-10 items-start md:w-[60%]'>
        <h1 className='animate__heartBeat text-2xl md:text-5xl font-semibold '>Read A Book Today</h1>
        <p className='text-gray-500 text-lg leading-8 md:leading-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ad nobis, consectetur nesciunt beatae fugit excepturi nam dicta sit magnam ullam ducimus eius  vitae!</p>
        <button className='bg-orange-400 px-10 rounded-lg py-2 ease-in duration-200 text-white hover:bg-orange-300'>GET ONE</button>
      </div>
      {/* second side */}
      <div className='hidden md:block'>
        <img className='Relative w-[320px] rounded-sm' src={firstImage} alt="" />
        <img className='absolute w-[250px] bottom-0 right-60 rounded-sm' src={secondImage} alt="" />
      </div>

    </div>
  )
}

export default Hero