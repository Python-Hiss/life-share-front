import axios from "axios";
import { useState } from "react";
import { GlobeAltIcon, SearchIcon } from "@heroicons/react/outline";
import Form2 from "./Form2";
import Table from "./Table2";

function HospitalProfile() {
  const [result, setResult] = useState([]);
  const url = 'http://127.0.0.1:8000/'
  let submitHandler = async (e) => {
    let data = e.target.blood_type.value
    let city = e.target.city.value
    let area = e.target.area.value
    let urls = `${url}accounts/blood/${data}/`
    e.preventDefault();
    const blood_data = await axios.get(urls)
      let filteredData = blood_data.data.filter(
        (item) =>  item.address.city.city == city
      );
      if (area){
        filteredData = filteredData.filter(
          (item) =>  item.address.area.area == area
        );
      }
      console.log(filteredData);
      setResult(filteredData);
    // });
  };
  return (
    <>
      <div className=" bg-top p-5 bg-[length:100%_50%]  bg-[url('https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-red-solid-color-background.jpg')] bg-no-repeat ">
        <img
          src="https://cdn.britannica.com/w:400,h:300,c:crop/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg"
          alt="hospital"
          className="object-cover m-auto rounded-full h-80 w-80"
        />
      </div>
      <h1 className="text-4xl text-center text-blue-900">Isteqlal</h1>
      <div>
        <div className="flex">
          <GlobeAltIcon className="h-9 w-9 top-1 right-1 " />
          <a href="https://istiklalhospital.com/">istiqlal-hospital.com</a>
        </div>
      </div>

      <div id="hospital-form-table">
        <div>
          <div class="md:grid md:grid-cols-2 md:gap-6 w-4/5 m-auto">
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={submitHandler}>
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
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

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium text-gray-700"
                          
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="last-name"
                          autocomplete="family-name"
                          class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium text-gray-700"
                          
                        >
                          Area
                        </label>
                        <input
                          placeholder="just for filter"
                          type="text"
                          name="area"
                          id="area"
                          autocomplete="family-name"
                          class="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit">
                       <SearchIcon class="inline-flex justify-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-9 h-9" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Table data={result}/>
      </div>
    </>
  );
}

export default HospitalProfile;
