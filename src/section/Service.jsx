import React, { useEffect } from 'react'
import { FaSearchengin} from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaCode } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FaSearchLocation } from "react-icons/fa";



import { MdOutlineDesignServices } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Service = () => {

useEffect(() => {
    AOS.init({
      duration: 800,
      delay:200,
      once: false, })
  }, []); 


  return (
    <div id='service'  className='w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px] h-full flex lg:flex-row flex-col justify-between items-start gap-[100px]'>

      <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
        <h1 data-aos="zoom-in" className='text-4xl uppercase text-white font-semibold font-poppins'>Services</h1>
        <div data-aos="zoom-in" className='bg-red-700 h-[3px] w-20'></div>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg font-poppins'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus aliquid corporis minus numquam archit.</p> 
      </div>

      <div className='lg:w-[60%] w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-12'>

          <div data-aos="zoom-in" className='flex flex-col justify-between items-start gap-6'>
          <div className='bg-red-700 text-white rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
              <FaCode className='fill-white size-9'/>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
          <h1 className='text-white font-semibold text-[26px]'>Web Development</h1>
          <p className='text-gray-300 text-[17px] font-poppins'>I design and develop responsive, user-friendly website that help businesses establish a strong online presence. From custom-built solution.</p>
          </div>
          <button className='text-red-700 hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong  className=''/></span></button>
          </div>

          <div data-aos="zoom-in" className='flex flex-col justify-between items-start gap-6'>
          <div className='bg-red-700 text-white rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
              <FaPaintBrush className='fill-white size-9'/>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
          <h1 className='text-white font-semibold text-[26px]'>UI/UX</h1>
          <p className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <button className='text-red-700 hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong  className=''/></span></button>
          </div>

            <div data-aos="zoom-in" className='flex flex-col justify-between items-start gap-6'>
          <div className='bg-red-700 text-white rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
              <FaBullseye className='fill-white size-9'/>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
          <h1 className='text-white font-semibold text-[26px]'>SEO</h1>
          <p className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <button className='text-red-700 hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong  className=''/></span></button>
          </div>

            <div data-aos="zoom-in" className='flex flex-col justify-between items-start gap-6'>
          <div className='bg-red-700 text-white rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
              <FaSearchLocation className='fill-white size-9'/>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
          <h1 className='text-white font-semibold text-[26px]'>Research</h1>
          <p className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <button className='text-red-700 hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong  className=''/></span></button>
          </div>
      </div>
    </div>
  )
}

export default Service