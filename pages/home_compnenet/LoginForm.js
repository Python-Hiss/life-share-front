import React from 'react'
import { useAuth } from '../../contexts/auth';
import { useRouter } from 'next/router';
import { useState } from 'react/cjs/react.development';
export default function LoginForm() {
  const { login ,tokens} = useAuth();
  const [check,setcheck] = useState('')
  const router = useRouter()

  const handleloginsubmit =async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value
    try{
        
        await login(username, password)
        
        
        
    }
    catch(error){
      setcheck('the password or username not correct')
     
    }
   
  }
    return (
    <>
   
     <section  id='sectionlogin'>

<div className="container h-full px-4 mx-auto" id='divlogin'>
  <div className="flex items-center content-center justify-center h-full">
    <div className="w-full px-4 lg:w-4/12 loginform">
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200 frombakc">
        <div className="px-6 py-6 mb-0 rounded-t">
          <div className="mb-3 text-center">
            <h6 className="text-sm font-bold text-blueGray-500">
              Sign in with
            </h6>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          {/* <div className="mb-3 font-bold text-center text-blueGray-400">
            <small>Or sign in with credentials</small>
          </div> */}
          <form onSubmit={handleloginsubmit}>
            <div className="relative w-full mb-3">
              <label
                className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                htmlFor="grid-password"
              >
                Username
              </label>
              <input
                type="text"
                name='username'
                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                placeholder="Username"
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
            <div>
                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                 {check}
                </span>
            </div>

            <div className="mt-6 text-center">
              <button
                className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                type="submit"
              >
                Sign In
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
    
        )
}
