//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'


import Header from "./section/Header";
import Hero from "./section/Hero";
import Service from "./section/Service";
import Project from "./section/Project";
import Testimonial from "./section/Testimonial";
import Cta from "./section/Cta";
import Footer from "./section/Footer";

function Portfolio() {

  return (
    
  <div>
    <Header />
    <Hero />
    <Service />
    <Project />
    <Testimonial />
    <Cta />
    <Footer />
  </div>
  )
}
export default Portfolio
