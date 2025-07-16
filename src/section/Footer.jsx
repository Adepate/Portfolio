import React, { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri"
import { FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa"
import { Link } from 'react-scroll'



const Footer = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        delay:200,
        once: false, })
    }, []); 
  
  return (
    <div id="contact" className="bg-neutral-900 w-full px-8 py-[80px] flex flex-col justify-center items-center gap-5">  
    <h1 data-aos="zoom-in" className='capitalize text-white text-[25px] font-semibold font-poppins'>Get in touch with me</h1>
    <p data-aos="zoom-in" data-aos-delay="200" className="text-gray-300 text--16px] text-center font-poppins leading-8">Aos street No 5, Nigeria <br/><br/> contactinfo@mobdev.text <br/><br/> +234 0808933____</p>
    <div data-aos="zoom-in" data-aos-delay="400" id="social-icon" className="w-full flex justify-center items-center gap-3 mt-6">
      <div className="bg-neutral-900 hover:bg-red-700 rounded-full p-3 cursor-pointer">
        <FaFacebook className="fill-white size-6"/>
      </div>
       <div className="bg-neutral-900 hover:bg-red-700 rounded-full p-3 cursor-pointer">
        <RiInstagramFill className="fill-white size-6"/>
      </div>
       <div className="bg-neutral-900 hover:bg-red-700 rounded-full p-3 cursor-pointer">
        <FaTwitter className="fill-white size-6"/>
      </div>
       <div className="bg-neutral-900 hover:bg-red-700 rounded-full p-3 cursor-pointer">
        <FaLinkedin className="fill-white size-6"/>
      </div>
    </div>

    <p className="text-gray-300 text-[15px] text-center font-poppins leading-8">Copyright 2025, Adeshola, All Rights Reserved</p>

    <div id="icon-box" className="bg-red-700 text-white p-3 rounded-full hover:bg-black hover:text-red-700 cursor-pointer fixes bottom-7 right-7">
      <Link to='hero' spy={true} offset={-100} smooth={true}> <FaArrowUp className="size-7" /></Link>
    </div>
    </div>
  )
}

export default Footer