import { useState, useEffect} from "react";
import axios from "axios";
import { comment } from "postcss";
import { Component } from "react/cjs/react.production.min";
import { useAuth } from "../../contexts/auth";

export default function Example(props) {
  const [address, setaddress] = useState("");
  const { tokens } = useAuth();
  let role = {
    Doner: "donater",
    Patient: "patient",
  };

  let url2 = "http://127.0.0.1:8000/";
  useEffect(async () => {
    await axios
      .get(`${url2}address/address/${props.result.address}/`)
      .then((data) => {
        setaddress(data.data)
        console.log(data);
      });
  }, []);

  const closing = () => {
    props.setEditForm(false)
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    let area = {
      area: e.target.Area.value,
    };
    let city = {
      city: e.target.City.value,
    };
    const Area = await axios.post(`${url2}address/area/`, area);
    const City = await axios.post(`${url2}address/city/`, city);
    let address = {
      area: Area.data.id,
      city: City.data.id,
      direction: "no comment",
    };
    const Address = await axios.post(`${url2}address/address/`, address);
    let data = new FormData();

    data.append("first_name", e.target.firstname.value);
    data.append("username", e.target.username.value);
    data.append("email", e.target.email.value);
    if (e.target.img.files[0]){
      data.append("image", e.target.img.files[0]);
    }
    data.append("phone_number", e.target.phone_number.value);
    data.append("chronic_diseases", e.target.chronic_diseases.checked);
    // data.append("blood_type", props.result.blood_type.id);
    if (tokens.Role == "Patient") {
      data.append("reason", e.target.reason.value);
    }

    data.append("address", Address.data.id);
    let url = `https://lifeshareproject.herokuapp.com/accounts/${role[tokens.Role]}/${
      tokens.id
    }/`;

    axios.put(`https://lifeshareproject.herokuapp.com/blood/update-blood/${props.result.blood_type}/`, {

        blood_type: e.target.bloodType.value,
        description: "No description added",
      })
      .then((res) => {
        // props.setResult()
        axios
          .put(url, data, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            props.setResult(res.data);
          });
      });

    props.setEditForm(false);
    props.setBlood(e.target.bloodType.value)
    props.setAddress(e.target.City.value)
  };
  let blood_types =['A+',"A-","B+","B-","AB+","AB-","O+","O-"]
  return (
    <>
      <div>
        <div className="w-4/5 m-auto ">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={handlesubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-6 gap-6">
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
                    </div>
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
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Area
                      </label>
                      {address.area && (
                        <input
                          defaultValue={address.area.area}
                          type="text"
                          name="Area"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      {address.area && (
                        <input
                          defaultValue={address.city.city}
                          type="text"
                          name="City"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative w-40 mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Direction
                      </label>
                      <input
                        defaultValue="direction"
                        type="text"
                        name="direction"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        placeholder="you@example.com"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chronic Diseases
                    </label>
                    <input
                      type="checkbox"
                      defaultValue={props.result.chronic_diseases}
                      name="chronic_diseases"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Blood Type
                    </label>
                    {/* <input
                      type="text"
                      name="bloodType"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    /> */}
                    <select name="bloodType" class=" mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {blood_types.map(type =>{
                          return<option value={type}>{type}</option>
                        })}
                        
                      </select>
                  </div>
                  {tokens.Role == "Patient" && (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Reason
                      </label>
                      <input
                        type="text"
                        name="reason"
                        defaultValue="Empty"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="flex items-center mt-1">
                      {/* <span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full"> */}
                      <input
                        type="file"
                        ref={(input) => {
                          Component.inpuElement = input;
                        }}
                        accept="image/*"
                        name="img"
                      />
                      {/* </span> */}
                      {/* <button
                        type="button"
                        className="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Change
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="text-right bg-gray-50 sm:px-6">
                <button
                    onClick={closing}
                    className="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 mb-2 ml-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
