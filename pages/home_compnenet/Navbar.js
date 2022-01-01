import React from "react";
import Link from "next/link";
import { useState,useEffect } from "react";
import { TweenMax, Power3, TimelineLite,Expo,gsap } from "gsap";
export default function Navbar() {
  useEffect(() => {
    TweenMax.from('.navbar',1, { y: 50 , delay:1.4,ease:Power3.easeInOut});
    TweenMax.staggerFrom('.divnavbar ul li',1,{
      delay:1.8,
      opacity:0,
      x:-20,
      ease:Power3.easeInOut 
   },0.1)
   TweenMax.from(".logoimage", 2, {
    delay: 0.6,
    y: 20,
    scale:3,
    opacity: 0,
    rotation: 90,
    ease: Expo.easeInOut
  });
  }, []);  return (
    <>
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg navbar">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start logoimage">
            <Link href="/">
              <img
                style={{width: '80px'}}
                className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed uppercase text-blueGray-700 whitespace-nowrap"
                src='/img/logo.png'
              />
              
            </Link>
            
          </div>
          <div
            className="divnavbar">
            <ul style={{display: 'flex'}} >
              <li  id="textdocs">
                  Homa_page
              </li>
              <li  id="textdocs">
                  Profile
              </li>
              <li id="textdocs">
                  Post
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
