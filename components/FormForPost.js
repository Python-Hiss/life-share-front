import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

export default function FormForPost(props) {
  
let blood_types =['A+',"A-","B+","B-","AB+","AB-","O+","O-"]
  return (
    <>
    
      <div >
        <div class="md:grid md:grid-cols-2 md:gap-6 w-4/5 m-auto">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={props.handlesubmit}>
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6 items-end">
                    <div class="col-span-6 sm:col-span-5">
                    <label for="content" class="block text-sm font-medium text-gray-700">Blood Type</label>
                      <select name="title" class=" mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {blood_types.map(type =>{
                          return<option value={type}>{type}</option>
                        })}
                        
                      </select>
                      {/* <input type="text" name="title" id="title" autocomplete="given-name"  /> */}
                    </div>
                    <div class="col-span-6 sm:col-span-5">
                      <label for="content" class="block text-sm font-medium text-gray-700">Add Content</label>
                      <input type="text" name="content" id="content" autocomplete="given-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-1 ">
                      <button className='w-full text-xl font-medium text-white bg-red-600 border border-transparent rounded-md h-11 shadow-xm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500' type="submit">
                        Post
                      </button>
                    </div>

                  </div>
                </div>





              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}