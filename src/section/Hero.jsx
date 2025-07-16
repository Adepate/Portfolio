import React, { useEffect } from 'react'
import design from '../assets/design.png';
import profile1 from '../assets/profile1.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay:200,
      once: false, })
  }, []); 

  return (

    <div id='hero' className='w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[150px] pt-[120px] h-full flex lg:flex-row flex-col justify-between items-center gap-[100px]'>
      <div className='lg:w-3/5 w-full flex flex-col justify-center items-start gap-8'>

        <h1 data-aos="zoom-in" className='text-red-800 lg:text-3xl text-xl font-semibold font-poppins '>Hi, I'am Adeshola</h1>
        <h1 data-aos="zoom-in" className='text-white text-5xl font-semibold font-poppins '>Front End Dev and Backend</h1>

        <p data-aos="zoom-in" data-aos-delay="200" className='text-gray-300 lg:text-xl text-lg font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolore cumque eligendi sit deserunt voluptas
        </p>

        <button data-aos="zoom-in" data-aos-delay="600" className='bg-red-500 hover:bg-white text-white hover:text-red-900 font-semibold text-lg px-8 py-3 rounded-lg mt-5 font-poppins'>Contact Me</button>
      </div>

      <div data-aos="zoom-in" data-aos-delay="600" className='lg:w-2/5 w-full relative'>
          <div className='bg-[#2f2f2f] lg:w-[400px] w-full lg:h-[500px] h-[450px] rounded-lg absolute top-[30px] -left-[30px]'> </div>
          <img src={profile1} className='lg:w-[520px] w-full lg:h-[500px] h-[450px] rounded-lg relative z-20' alt="" /> 
          <img src={design} className='absolute -top-7 -right-7 rounded-lg z-10' alt="" />
      </div>
    </div>
  )
}

export default Hero