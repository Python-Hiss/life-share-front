import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { TweenMax, Power3, TimelineLite,Expo,gsap } from "gsap";

import Navbar from "./Navbar";
export default function Signupformhospital() {
     useEffect(() => {
    TweenMax.staggerFrom('.divnavbar ul li',1,{
      delay:1.4,
      opacity:0,
      y:-20,
      ease:Power3.easeInOut 
   },0.2)
   TweenMax.from(".logoimage", 2, {
    delay: 0.6,
    y: 40,
    scale:(-4,0),
    ease: Expo.easeInOut
  });

  }, []);  

  const handlesubmitsignup =async (e) => {
    let data = new FormData()
    e.preventDefault();
 
    data.append("name",e.target.firstname.value)
    data.append("username",e.target.username.value)
    data.append("email",e.target.email.value)
    data.append("password",e.target.password.value)
    data.append("website",e.target.website.value)
    data.append("image",e.target.img.files[0])
    let url = 'http://127.0.0.1:8000/hospital/signup/';
    console.log(data);
    // const create = await axios.post(
    //     `http://127.0.0.1:8000/account/signup`,
    //     newData
    //   );
    //   console.log(create.data);
    
    const create =axios.post(url, data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    console.log(create);
  };
  return (
      <>
      <Navbar/>
      
    <section id="sectionsignup">
      <div className="container h-full px-4 mx-auto" id="divsignup">
        <div className="flex items-center content-center justify-center h-full">
          <div className="w-full px-4 lg:w-6/12" style={{height:'50vh'}}>
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200">
              <div className="px-6 py-6 mb-0 rounded-t">
                <div className="mb-3 text-center">
                  <h6 className="text-sm font-bold text-blueGray-500">
                    Sign up with
                  </h6>
                </div>
                <div className="text-center btn-wrapper">
                  <button
                    className="inline-flex items-center px-4 py-2 mb-1 mr-2 text-xs font-normal font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 focus:outline-none hover:shadow-md"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
                    Github
                  </button>
                  <button
                    className="inline-flex items-center px-4 py-2 mb-1 mr-1 text-xs font-normal font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 focus:outline-none hover:shadow-md"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="mb-3 font-bold text-center text-blueGray-400">
                  <small>Or sign up with credentials</small>
                </div>
                <form onSubmit={handlesubmitsignup}>
                  <div className="relative w-full mb-3 ">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Hospital Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Hospital Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="User Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      website
                    </label>
                    <input
                      type="text"
                      name="website"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Select image:
                    </label>
                    <input type="file" name="img" accept="image/*"/>
                  </div>
                  </div>
                  <div className="mt-6 text-center">
                    <button
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
