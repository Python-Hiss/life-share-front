import React from 'react'
import axios from 'axios';
export default function Cahngepas(props) {
    const url = 'https://lifeshareproject.herokuapp.com/'
    console.log(props.token);
    const handlesubmit=async(e)=>{
        e.preventDefault();
        let password = {
            new_password:e.target.new_password.value,
            old_password : e.target.old_password.value
            
        }
        const config = {
            headers:{'Authorization':`Bearer ${props.token}`},
        }
        const change = await axios.put(`${url}accounts/api/change-password/`,password,config)
        console.log(change.data);
    }
    
    return (
        <div className="mt-5">
        <div className="w-4/5 m-auto ">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handlesubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      old_password
                    </label>
                    <input
                      type="password"
                      name="old_password"
                      id="old_password-name"
                      autoComplete="given-name"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      new_password
                    </label>
                    <input
                    //   defaultValue={props.result.username}
                      type="password"
                      name="new_password"
                      id="new_password"
                      autoComplete="given-name"
                      className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                  <button
                    onClick={()=>props.setchange(false)}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Save
                  </button>
                </div>
                </div>
               

              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
