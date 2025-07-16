import React, { useEffect } from  'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import profile from '../assets/profile.jpg'
import soundwave from '../assets/soundwave.png'





const Project = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        delay:200,
        once: false, })
    }, []); 

  return (

    <div id='project' className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5'>

      <h1 data-aos="zoom-in" className='text-4xl text-white uppercase font-poppins font-semibold'>Project</h1>

      <div data-aos="zoom-in" data-aos-delay="200" className='bg-red-700 h-[3px] w-20'>
      </div>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg text-cente font-poppins lg:w-[70%] w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, aboubjbjjbnnbnb okyyyyyyyy.</p>

      <div className='w-full flex lg:flex-row flex-col justify-between items-center gap-20 mt-20'>
        <div className='lg:w-[40%] w-full flex flex-col  justify-center items-start gap-6'>
          <div className='flex flex-col justify-center items-start gap 4'>
            <h1 data-aos="zoom-in" data-aos-delay="600" className='text-white font-semibold text-[32px] leading-10'>Ecommerce Website</h1>
            <p data-aos="zoom-in" data-aos-delay="800" className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quasi?</p>
          </div>
          <button data-aos="zoom-in" data-aos-delay="1000" className='text-red-700 hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>
          <div data-aos="zoom-in" data-aos-delay="1200" className='lg:w-[60%] w-full relative'>
            <div className='bg-gray-300 lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rouded-lg absolute top-[30px] -left-[30px]'></div>
            <img src={profile} alt="" className='relative z-20 rounded-lg' />
          </div>
      </div>

      <div className='w-full flex lg:flex-row-reverse flex-col justify-between items-center gap-20 mt-20'>
        <div className='lg:w-[40%] w-full flex flex-col  justify-center items-start gap-6'>
          <div className='flex flex-col justify-center items-start gap 4'>
            <h1 data-aos="zoom-in" data-aos-delay="600" className='text-white font-semibold text-[32px] leading-10'>Soundwave Website</h1>
            <p data-aos="zoom-in" data-aos-delay="800" className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quasi?</p>
          </div>
          <button data-aos="zoom-in" data-aos-delay="1000" className='text-red-700 hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong /></span></button>
        </div>
          <div data-aos="zoom-in" data-aos-delay="1200" className='lg:w-[60%] w-full relative'>
            <div className='bg-gray-300 lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rouded-lg absolute top-[30px] -left-[30px]'></div>
            <img src={soundwave} alt="" className='relative z-20 rounded-lg' />
          </div>
      </div>

    </div>
  )
}

export default Project