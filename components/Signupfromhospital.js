import React from "react";
import axios from "axios";
import { useAuth } from "../contexts/auth";
import { useState } from "react";
// import { useState,useEffect } from "react";
// import { TweenMax, Power3, TimelineLite,Expo,gsap } from "gsap";
// import Navbar from "./Navbar";
import { useRouter } from 'next/router';
export default function Signupformhospital() {
  const [check , setcheck] = useState('')
  const { login,logout } = useAuth()
  const router = useRouter()
  const handlesubmitsignup =async (e) => {
    
    let data = new FormData()
    e.preventDefault();
    const url = 'https://lifeshareproject.herokuapp.com/'
    data.append("first_name",e.target.firstname.value)
    data.append("username",e.target.username.value)
    data.append("email",e.target.email.value)
    data.append("password",e.target.password.value)
    data.append("website",e.target.website.value)
    data.append("roles", "Hospital");
    let urls = `${url}accounts/hospital/signup/`;
    try {
      const create = await axios.post(urls, data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      
     await login(create.data.username, e.target.password.value).then(()=>{
      router.push({
        pathname: '/Profile',
      });
    })
      
    } 
    catch (error) {
      console.error(error);
      logout();
      setcheck('the username or email is already exist')
    }

  };
  return (
      <>      
    <section id="sectionsignuphospital">
      <div className="container h-full px-4 mx-auto" id="divsignup">
        <div className="flex items-center content-center justify-center ">
          <div className="w-full px-4 mt-40 lg:w-6/12"  style={{height:'50vh'}}>
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200 frombakc">
              <div className="flex-auto px-4 py-10 pt-0 mt-20 lg:px-10">
                <form onSubmit={handlesubmitsignup}>
                <div className="grid grid-cols-[1fr_1fr] gap-3">
                  <div className="relative w-full mb-3 ">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Hospital Name
                    </label>
                    <input required
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
                    <input required
                      type="text"
                      name="username"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="User Name"
                    />
                  </div>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input required
                      type="email"
                      name="email"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input required
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
                    <input required
                      type="password"
                      name="confirmpassword"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Confirm Password"
                    />
                  </div>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      website
                    </label>
                    <input required
                      type="text"
                      name="website"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    />
                  </div>
                  <p className="text-black">{check}</p>
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
