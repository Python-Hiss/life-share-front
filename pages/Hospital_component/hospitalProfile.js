import axios from "axios";
import { useState } from "react";
import { GlobeAltIcon ,SearchIcon } from "@heroicons/react/outline";
import Form2 from "./Form2";
import Table from "./Table2";

function HospitalProfile() {
  const [result, setResult] = useState([]);
  const [location, setLocation] = useState([]);
  const [bloodType, setBloodType] = useState([]);


  let locationHandler = (e) => {
    setLocation(e.target.value)
  };
  let bloodTypeHandler = (e) => {
    setBloodType(e.target.value)
  };
  let submitHandler = async (e) => {
    e.preventDefault();
    await axios.get("http://127.0.0.1:8000/account/view/").then((data) => {
      let newData = data.data
      let filteredData = newData.filter(item =>item.blood_type == bloodType && item.location == location)
      setResult (filteredData)
    });
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
          <GlobeAltIcon className="h-9 w-9 top-1 right-1 "/>
          <a href="https://istiklalhospital.com/">istiqlal-hospital.com</a>
        </div>
      </div>

      <div id="hospital-form-table">
      <Form2 locationHandler={locationHandler} bloodTypeHandler={bloodTypeHandler} submitHandler={submitHandler}/>

      <Table/>
       
      </div>
    </>
  );
}

export default HospitalProfile;
