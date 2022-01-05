import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TweenMax, Power3, TimelineLite, Expo, gsap } from "gsap";
import { useAuth } from "../contexts/auth";
import Navbar from "./Navbar";
import { useRouter } from 'next/router';
export default function Signupform() {
  const [check , setcheck] = useState('')
  const { login } = useAuth()
  const router = useRouter()
  const showsignhospital = () => {
    gsap.to("#sectionsignuphospital", 1.5, { top: 0, ease: Power3.easeInOut });
  };
  const handlesubmitsignup = async (e) => {
    try{
    let role = {
      Doner: "donater",
      Patient: "patient",
    };
    let data = new FormData();
    e.preventDefault();
    const url = ' https://lifeshareproject.herokuapp.com/'
    let blood = {
      blood_type: e.target.blood_type.value,
      description: e.target.description.value
    }
    // console.log(e.target.role.value);
    const bloodtt = await axios.post(`${url}blood/addtype/`, blood)
      
    data.append("first_name", e.target.firstname.value);
    data.append("username", e.target.username.value);
    data.append("email", e.target.email.value);
    data.append("password", e.target.password.value);
    data.append("blood_type",bloodtt.data.id);
    data.append("roles", e.target.role.value);
    
    let urls = `${url}accounts/${role[e.target.role.value]}/signup/`;
     
    const user = await axios.post(urls, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    router.push({
      pathname: '/Profile',
    });  

    await login(user.data.username, e.target.password.value)
  }catch(error){
    onsole.error(error);
      logout();
    setcheck('the username or email is already exist')
  }
 
  };
  return (
    <>
      <section id="sectionsignup">
        <div className="container px-4 mx-auto" id="divsignup">
          <div className="flex items-center content-center justify-center">
            <div className="w-full px-4 mt-28 lg:w-6/12">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200 frombakc">
                <div className="flex-auto px-4 py-10 pt-0 lg:px-20">
                  
                  <div className="px-6 pb-6 mb-0 rounded-t">
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <form onSubmit={handlesubmitsignup}>
                    <div className="grid grid-cols-[1fr_1fr] gap-3">
                      <div className="relative w-full mb-3 ">
                        <label
                          className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                          htmlFor="grid-password"
                        >
                          Full Name
                        </label>
                        <input required
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
                        <input required
                          type="text"
                          name="username"
                          className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="User Name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] gap-3">
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
                          className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="Email"
                        />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                            htmlFor="grid-password"
                          >
                            Role
                          </label>
                          <select name="role" id="role"
                            className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          >
                            <option value="Doner">Doner</option>
                            <option value="Patient">Patient</option>
                          </select>
                        
                      </div>
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
                        <input required
                          type="password"
                          name="confirmpassword"
                          className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] gap-3">
                      <div className="relative w-full mb-3">
                        <label
                          className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                          htmlFor="grid-password"
                        >
                          blood_type
                        </label>
                        <select
                          id="cars"
                          name="blood_type"
                          className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        >
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                          htmlFor="grid-password"
                        >
                          discription
                        </label>
                        <textarea name="description" rows="10" cols="30" className="w-full h-10 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring">
                          No Comment
                        </textarea>
                      </div>
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
                    <div className="mt-6 text-center">
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none w-30 bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={showsignhospital}
                    >
                      Sign up as Hospital
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
