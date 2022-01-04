import { useState,useEffect } from "react";
import axios from "axios";
import { comment } from "postcss";
import { Component } from "react/cjs/react.production.min";
import { useAuth } from "../../contexts/auth";

export default function EditHospital(props) {
  
  const { tokens } = useAuth();
  let url = 'http://127.0.0.1:8000/'
  const handlesubmit = async (e) => {
    e.preventDefault();
    let area = {
      area:e.target.Area.value,
      
    }
    let city = {
      city:e.target.City.value,
      
    }
    const Area = await axios.post(`${url}address/area/`,area)
    const City = await axios.post(`${url}address/city/`,city)
    let address={
      area:Area.data.id,
      city:City.data.id,
      direction : e.target.direction.value
    }
    const Address = await axios.post(`${url}address/address/`,address)
    console.log(Area.data);
    console.log(City.data);
    console.log(address);
    let data = new FormData();
    
    data.append("first_name", e.target.firstname.value);
    data.append("username", e.target.username.value);
    data.append("email", e.target.email.value);
    data.append("image", e.target.img.files[0]);
    data.append("phone_number", e.target.phone_number.value);
    data.append("address", Address.data.id);
    data.append("website", e.target.Website.value);
    
    let urls = `${url}accounts/hospital/5/`;

    
     
        axios.put(urls, data, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            props.setprofile(res.data);
          });
      };

    
  
  return (
    <>
      <div>
        <div className="w-4/5 m-auto ">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handlesubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Area
                        </label>
                        <input
                          defaultValue={props.result.first_name}
                          type="text"
                          name="Area"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          defaultValue={props.result.first_name}
                          type="text"
                          name="City"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          defaultValue={props.result.first_name}
                          type="text"
                          name="firstname"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      User Name
                    </label>
                    <input
                      defaultValue={props.result.username}
                      type="text"
                      name="username"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      defaultValue={props.result.email}
                      name="email"
                      type="text"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      defaultValue={props.result.phone_number}
                      name="phone_number"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      defaultValue={props.result.website}
                      name="Website"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  </div>
                
                  
                  
                  
                  <div className="grid grid-cols-6 gap-6">

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="flex items-center mt-1">
                      
                      <input
                        type="file"
                        accept="image/*"
                        name="img"
                      />
                      
                      
                    </div>
                  </div>
                  <div className="relative w-40 mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Direction
                      </label>
                      <textarea name="direction" rows="10" cols="30"  className="w-full h-20 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring">
                        No Comment 
                      </textarea>
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-6">

                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Save
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
