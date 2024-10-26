import React from "react";
import { Link } from "react-router-dom";
import { Typewriter} from "react-simple-typewriter"

const Home = () => {
   

  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 bg-white">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <span className=" sm:block text-3xl"> Hello EveryOne This is Prashant Sharma</span>
            <h2 className="text-2xl font-bold sm:text-5xl">
              I'm 
            <span className="text-yellow-400">          
            <Typewriter
            words={ [" Fullstack Developer"," MERN Developer"," React Developer"]}
            loop={true}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
             
          />
</span>
              
              <span className="hidden sm:block text-lg mt-3">JAVASCRIPT | REACT | NODE JS| EXPRESS JS| MONDO DB</span>
            </h2>
           

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              
              &nbsp; Resume / CV
               
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96 sm: mt-5 ms-5"
            src="./public/images/cartoon-573.gif"
            alt="image1"
          />
        </div>
      </aside>

      
    </div>
  );
};

export default Home;
