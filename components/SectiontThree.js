import React from 'react'
import { useEffect } from 'react'
import {gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function SectiontThree() {

   gsap.registerPlugin(ScrollTrigger)
  
      useEffect(() => {


        gsap.from("#imageone",1.5, {
         
          scrollTrigger: {
            trigger: "#imageone",
            toggleActions:'restart reverse restart reverse', // onenter onleave onenterback onleaveback
            start:'top center',
            end:'bottom center'

          },
          x: -500,
          autoAlpha: 0,
          overwrite: "auto"
          // ease: Power3.easeInOut,
        });
        gsap.from("#imagethree",1.5, {
         
          scrollTrigger: {
            trigger: "#imagethree",
            toggleActions:'restart reverse restart reverse', // onenter onleave onenterback onleaveback
            start:'20% center',
            end:'180% center'
          },
          y: -500,
          autoAlpha: 0,
          overwrite: "auto"
        });
      }, []);
  return (
    <>

      <section className="relative pb-40 mt-48 bg-white md:mt-40" id='sectiondata'>

        <div className="container px-4 pt-48 pb-32 mx-auto">
          <div className="flex flex-wrap items-center">
            

            <div className="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0" id="imageone">
              <img
                alt="..."
                className="max-w-full shadow-xl"
                id="section3img"
                src="/img/savelife.svg"
              />
            </div>
            <div id="section3" className="w-full px-12 ml-auto md:w-5/12 md:px-4">
              <div className="md:pr-12">
                <div className="inline-flex mb-6 shadow-lg text-blueGray-500 ">
                </div>
                
                <h3  id="text" className="text-3xl font-semibold text-white">
                <span className="u-file-icon u-icon u-icon-rectangle u-icon-2"><img src="/img/donate.png" alt=""/></span> Why should people donate blood?
                </h3>
                <p id="text" className="mt-4 text-lg leading-relaxed text-white">
                  Safe blood saves lives. Blood is needed by women with complications during pregn​ancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 pt-48 pb-32 mx-auto">
          <div className="flex flex-wrap items-center">
            <div id="section3" className="w-full px-12 ml-auto md:w-5/12 md:px-4">
              <div className="md:pr-12">
              <div className="inline-flex mb-6 shadow-lg text-blueGray-500 ">
                </div>
                <h3  id="text" className="text-3xl font-semibold text-white">
                <span className="u-file-icon u-icon u-icon-rectangle u-icon-2"><img src="/img/heart.png" alt=""/></span>
                  A Happier, Longer Life!
                </h3>
                <p id="text" className="mt-4 text-lg leading-relaxed text-white">
                  One blood donation can save up to three lives, according to Dr. DeSimone. People usually donate because it feels good to help others, and altruism and volunteering have been linked to positive health outcomes, including a lower risk for depression and greater longevity.
                </p>
              </div>
            </div>

            <div className="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0 divimagethree">
              <img
                alt="..."
                className="w-full shadow-xl "
                id="section3img"
                src="/img/data.png"
              />
            </div>
          </div>
        </div>

        <div className="container px-4 pt-48 pb-32 mx-auto">
          <div className="flex flex-wrap items-center">
          <div className="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0" id='imagethree'>
              <img
                alt="..."
                className="max-w-full shadow-xl"
                id="section3img"
                src="/img/emergency.svg"
              />
            </div>
            <div id="section3" className="w-full px-12 ml-auto md:w-5/12 md:px-4">
              <div className="md:pr-12">
              <div className="inline-flex mb-6 shadow-lg text-blueGray-500 ">
                </div>
                <h3  id="text" className="text-3xl font-semibold text-white">
                <span className="u-file-icon u-icon u-icon-rectangle u-icon-2"><img src="/img/heart2.png" alt=""/></span>
                  A Healthier Heart and Vascular System                </h3>
                  <p id="text" className="mt-4 text-lg leading-relaxed text-white">
                  Regular blood donation is linked to lower blood pressure and a lower risk for heart attacks. “It definitely helps to reduce cardiovascular risk factors,” says Dr. DeSimone.
                </p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="container px-4 pt-48 pb-32 mx-auto">
          <div className="flex flex-wrap items-center">
            <div id="section3" className="w-full px-12 ml-auto md:w-5/12 md:px-4">
              <div className="md:pr-12">
              <div className="inline-flex mb-6 shadow-lg text-blueGray-500 ">
                </div>
                <h3  id="text" className="text-3xl font-semibold text-white">
                <span className="u-file-icon u-icon u-icon-rectangle u-icon-2"><img src="/img/give.png" alt=""/></span>
                You are someone's Hero!
              </h3>
              <p id="text" className="mt-4 text-lg leading-relaxed text-white">
                In as little as few minutes, you can become someone's unnamed, unknown, but all-important Hero. Saving a life is a noble work that starts very simply and easily. Donate Blood or donate Money, every form of contribution you make is important, valued and essential in our shared mission to save lives.
                </p>
              </div>
            </div>

            <div className="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0 divimagefour">
              <img
                alt="..."
                className="max-w-full shadow-xl"
                id="section3img"
                src="/img/hands.png"
              />
            </div>
          </div>
        </div>


      </section>

   
    </>
  )
}





