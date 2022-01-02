import React from "react";
import Link from "next/link";
import { useState,useEffect } from "react";
import { TweenMax, Power3, TimelineLite,Expo,gsap } from "gsap";
export default function Navbar() {
  const closeregister =()=> {
    gsap.to('#sectionsignup',1.5, {top:-1000,ease:Power3.easeInOut,});
    gsap.to('#sectionsignuphospital',1.5, {top:-1000,ease:Power3.easeInOut,});
    gsap.to('#sectionlogin',1.5, {top:-1000,ease:Power3.easeInOut,});
  }

  return (
    <>
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg navbar">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div onClick={closeregister} className="relative flex justify-between w-full cursor-pointer lg:w-auto lg:static lg:block lg:justify-start logoimage">
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

                  Home Page
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
