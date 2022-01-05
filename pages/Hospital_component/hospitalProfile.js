import axios from "axios";
import { useState, useEffect } from "react";
import { GlobeAltIcon, SearchIcon } from "@heroicons/react/outline";
import Table from "./Table2";
import EditHospital from "./EditHospital";
import HospitalInfo from "./HospitalInfo";
import Header2 from "../layout/Header2"
import { useAuth } from "../../contexts/auth";
import Footer from "../home_compnenet/Footer";
import LoadPage from "./LoadPage";
import Cahngepas from "./Cahngepas";
function HospitalProfile() {
  const { tokens, logout } = useAuth();
  const [result, setResult] = useState([]);
  const [profile, setprofile] = useState([]);
  const [edit, setedit] = useState(false);
  const [Load, setLoad] = useState(false);
  const [change, setchange] = useState(false);
  const url = 'https://lifeshareproject.herokuapp.com/'
  const getdata = async()=> {
    await axios
    .get(`${url}accounts/hospital/${tokens.id}/`)
    .then((data) => {
      setprofile(data.data);
    });
  }
  useEffect(async () => {
    await axios
    .get(`${url}accounts/hospital/${tokens.id}/`)
    .then((data) => {
      setprofile(data.data);
    });
  }, []);
  let submitHandler = async (e) => {
    e.preventDefault();
    let data = e.target.blood_type.value
    let city = e.target.city.value

    let urls = `${url}accounts/blood/${data}/`
    
    const blood_data = await axios.get(urls)
    let filteredData = blood_data.data.filter(
      (item) => item.address.city.city == city
    );
    console.log(filteredData);
    setResult(filteredData);
  }

  const showEdit = () => {
    setedit(true)

  }


  const sendEmail = async (e) => {
    setLoad(true)
    e.preventDefault();
    let loadnumber =result.length
    result.map((person, index) => (

      setTimeout(() => {
        // do stuff function with item
        axios.post(`${url}accounts/send-form-email/`, { email: person.email })
        console.log('{ email: person.email }')
      }, 2000 * index)
    ))
    setTimeout(()=>{
      setLoad(false)
    },2000*loadnumber)
    
  }
  const changepas = (e)=>{
    e.preventDefault();
    setchange(true)
  }
  const deleteaccount = () => {
    axios.delete(
      `${url}accounts/hospital/${tokens.id}`
    )
    logout()
  }

  return (
    <>
      {/* {profile.image} */}
    
      <Header2 />
      
      <div className=" bg-top bg-[length:100%_50%] h-[35rem] p-[7rem] bg-[url('https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-red-solid-color-background.jpg')] bg-no-repeat">
        <img
          src={profile.image}
          alt="hospital"
          className="object-cover m-auto rounded-full h-80 w-80"
        />
      </div>
      <h1 className="text-4xl text-center text-blue-900">{profile.first_name}</h1>
      {/* <button onClick={sendEmail}>send email </button> */}
      <div>
        <div className="mt-5 text-2xl text-center text-blue-900">
          {/* <GlobeAltIcon className=" h-9 w-9" /> */}
          <a href={profile.website} >website</a>
        </div>
      </div>

      {!edit ? <HospitalInfo result={profile} submitHandler={showEdit} /> : <EditHospital setprofile={setprofile} setedit={setedit} result={profile} getdata={getdata} />}
      {change && <Cahngepas token={tokens.access}/>}
      <button onClick={changepas}>Change Password</button>
      <div className="mt-6 text-center">
        {/* <button
                        className="w-1/5 px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-800 rounded shadow outline-none active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="button"
                        onClick={showEdit}
                      >
                        Edit Profile
                      </button> */}
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
        {Load && <LoadPage/>}
        <Table data={result} />
        <div className="mt-6 text-center">
          <button
            className="w-4/5 px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-800 rounded shadow outline-none active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
            type="button"
            onClick={sendEmail}
          >
            send email
          </button>
        </div>
        <button onClick={deleteaccount} className="my-12 text-red-600 border-2 border-red-600 border-dashed rounded-lg h-9 w-36 ml-52">
          Remove account
        </button>
      </div>
      <Footer/>
    </>
  );
}

export default HospitalProfile;
