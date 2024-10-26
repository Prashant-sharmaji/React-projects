import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <span className=" sm:block text-3xl"> Hello EveryOne This is Prashant Sharma</span>
            <h2 className="text-4xl font-bold sm:text-5xl">
              let's talk about my skills
              <span className="hidden sm:block text-lg">JAVASCRIPT | REACT | NODE JS| EXPRESS JS| MONDO DB</span>
            </h2>

           
              
             <a href="./public/resume/PrashantSharmaResume (1).pdf" download  className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"> &nbsp; Resume / CV</a>
               
         
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>
      </div>
  )
}

export default About
