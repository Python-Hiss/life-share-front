import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TweenMax, Power3, TimelineLite, Expo, gsap } from "gsap";

import Navbar from "./Navbar";
export default function Signupform() {
  const showsignhospital = () => {
    gsap.to("#sectionsignuphospital", 1.5, { top: 0, ease: Power3.easeInOut });
  };
  const handlesubmitsignup = async (e) => {
    let data = new FormData();
    e.preventDefault();

    data.append("first_name", e.target.firstname.value);
    data.append("username", e.target.username.value);
    data.append("email", e.target.email.value);
    data.append("password", e.target.password.value);
    data.append("blood_type", e.target.blood_type.value);
    data.append("roles", "Donater");
    let url = "http://127.0.0.1:8000/donater/signup/";
    const create = axios.post(url, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(create.data);
  };
  return (
    <>
      <section id="sectionsignup">
        <div className="container px-4 mx-auto" id="divsignup">
          <div className="flex items-center content-center justify-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200 frombakc">
                <div className="flex-auto px-4 py-10 pt-0 mt-20 lg:px-10">
                  <div className="mt-6 text-center">
                    <button
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={showsignhospital}
                    >
                      Sign up Hospital
                    </button>
                  </div>
                  <div className="px-6 pb-6 mb-0 rounded-t">
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <form onSubmit={handlesubmitsignup}>
                      <div className="relative w-full mb-3 ">
                        <label
                          className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                          htmlFor="grid-password"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="First Name"
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
                        className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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
                        className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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
                        className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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
                        className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        blood_type
                      </label>
                      <input
                        type="text"
                        name="blood_type"
                        className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      />
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
