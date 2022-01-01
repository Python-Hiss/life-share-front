/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import { TweenMax, Power3, TimelineLite,Expo} from "gsap";
import { useEffect, useRef } from 'react';


export default function Sectiontwo() {
    
    
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);
  return (
    <>
      <section className="relative flex items-center h-screen pt-16 header max-h-860-px">
      <video autoplay muted loop ref={videoRef} id="myVideo">
        <source src="/video/blood.mp4" type="video/mp4"/>
      </video>

        <div className="container flex flex-wrap items-center mx-auto content">
           
          <div className="px-4 w-fit md:w-8/12 lg:w-6/12 xl:w-6/12 " style={{width:'fit-content'}}>
            <div className="pt-32 sm:pt-0 w-fit"  >
              <h2 className="text-4xl font-semibold text-blueGray-600">
              Give The "Gift of Life"&nbsp;<span style={{fontWeight: 700}}>Today</span>!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500" style={{width:'400px'}}>
              Join our cause and help us save more lives. Everyone should have the right to get a blood transfusion.
              </p>
              <div className="mt-12" style={{display:'flex'}}>
               
                 <div target="_blank" className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear border-4 border-white rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg hover:bg-red-800"
                    style={{width:'150px'}}>
                        Register
                     </div>   
                  
               
                <div
                  className="px-6 py-4 mb-1 ml-1 mr-1 text-sm font-bold text-center text-white uppercase border-4 border-white rounded shadow outline-none github-star focus:outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-lg hover:bg-red-800"
                  target="_blank"
                  style={{width:'150px'}}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
          <div className='imagenav'>
                <img src="/img/logo.png" alt="" style={{width: '400px'}}/>
            </div>
        </div>
        
        {/* <img
          className="absolute top-0 right-0 w-10/12 pt-16 -mt-48 b-auto sm:w-6/12 sm:mt-0 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        /> */}
      </section>
      
  

    </>
  );
}
