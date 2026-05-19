import { useState } from 'react'
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar'
import RecentWorks from '../components/RecentWorks'
import MainFooter from '../components/MainFooter'

import recent1 from '../assets/images/recent1.png'
import recent2 from '../assets/images/recent2.png'
import recent3 from '../assets/images/recent3.png'
import recent4 from '../assets/images/recent6.png'

function Home() {
  

  return (
    <>
        <Navbar name="Lorenz Ciocon" />


        <section className="opacity-0 h-[60vh] animate-fadeUpBlur font-poppins">
          <div className="container mx-auto w-[90%] md:w-4/5 md:max-w-350">
            <h1 className="mt-[30vh] font-bold leading-tight mb-2
              text-[3.5em] sm:text-[4.5em] md:text-[5.5em]
              lg:text-[7em] xl:text-[8.5em] 2xl:text-[10.5em] 
              lg:-ml-15"
            >
              Hi! I'm <span className='text-[#1a461e]'>Lorenz</span>
            </h1>

            <p className="text-[#1A461E] w-3/4 sm:w-1/2 sm:max-w-87.5 mb-4">
              a 21-year-old computer science student from the University of St. Lasalle insterested in full-stack development.
            </p>

            <Link
              to="/about"
              className="text-white bg-[#1A461E] px-4 py-2 rounded-[10px]"
            >
              Know More
            </Link>
          </div>
        </section>
        
        
        <RecentWorks works={[
            {
              id: 1,
              name: 'BiteBook',
              description: 'catering management web-app',
              tech_stack: 'Laravel, Tailwind',
              img_addr: recent4, 
              link: "https://github.com/liliput35/bitebook"
            },
            {
              id: 2,
              name: 'FluxTrack',
              description: 'incident reporting web-app',
              tech_stack: 'PHP, JS, MySql',
              img_addr: recent2, 
              link: "https://github.com/liliput35/FluxTrack"
            },
            {
              id: 3,
              name: 'Gravelight',
              description: '3d narrative adventure game',
              tech_stack: 'Unity, C#',
              img_addr: recent1, 
              link: "https://github.com/liliput35/gravelight"
            },
            ]} />
        <MainFooter/>
    </>
  )
}

export default Home
