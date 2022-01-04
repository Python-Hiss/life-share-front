import axios from "axios";
import { useState,useEffect } from "react";
import { GlobeAltIcon, SearchIcon } from "@heroicons/react/outline";
import Table from "./Table2";
import EditHospital from "./EditHospital";
function HospitalProfile() {
  const [result, setResult] = useState([]);
  const [profile, setprofile] = useState([]);
  const [edit, setedit] = useState(false);
  const url = 'http://127.0.0.1:8000/'

  useEffect(async () => {
    await axios
      .get(`${url}accounts/hospital/5/`)
      .then((data) => {
        setprofile(data.data);
      });
  }, []);
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
    }

  const showEdit=(e)=>{
    e.preventDefault();
setedit(true)

  }
  
  const sendEmail= async (e)=>{
    e.preventDefault();
    result.map((person,index) => (
      
      setTimeout(() => {
        // do stuff function with item
        axios.post(`${url}accounts/send-form-email/`,{email:person.email})
        console.log({email:person.email})
      }, 2000*index )
    ))
  }



  return (
    <>
      
      <div className=" bg-top p-5 bg-[length:100%_50%]  bg-[url('https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-red-solid-color-background.jpg')] bg-no-repeat ">
        <img
          src={profile.image}
          alt="hospital"
          className="object-cover m-auto rounded-full h-80 w-80"
        />
      </div>
      <h1 className="text-4xl text-center text-blue-900">{profile.first_name}</h1>
      <button onClick={sendEmail}>send email </button>
      <div>
        <div className="flex">
          <GlobeAltIcon className="h-9 w-9 top-1 right-1 " />
          <a href="https://istiklalhospital.com/">istiqlal-hospital.com</a>
        </div>
      </div>
      
      {edit && <EditHospital result = {profile}/>}
      <div className="mt-6 text-center">
                      <button
                        className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="button"
                        onClick={showEdit}
                      >
                        Edit Profile
                      </button>
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
        <div className="mt-6 text-center">
                      <button
                        className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="button"
                        onClick={sendEmail}
                      >
                        send email
                      </button>
                    </div>
      </div>
    </>
  );
}

export default HospitalProfile;
