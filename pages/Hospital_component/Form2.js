import React from 'react'
import { SearchIcon } from "@heroicons/react/outline";

export default function Form2(props) {
    return (
        <>
<div >
  <div class="md:grid md:grid-cols-2 md:gap-6 w-4/5 m-auto">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST" onSubmit={props.submitHandler}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Blood Type</label>
                <input onChange={props.bloodTypeHandler} type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Location</label>
                <input onChange={props.locationHandler} type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" >
            
            </button>
            <SearchIcon  class="inline-flex justify-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-9 h-9"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


        </>
    )
}
