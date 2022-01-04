import { useState } from "react";
import axios from "axios";
import { comment } from "postcss";
import { Component } from "react/cjs/react.production.min";

export default function EditHospital(props) {
  // const [first_name, setFirstName] = useState(props.result.first_name);
  // const [last_name, setLastName] = useState(props.result.last_name);
  // const [image, setImage] = useState(props.result.image);
  // const [username, setUsername] = useState(props.result.username);
  // const [email, setEmail] = useState(props.result.email);
  // const [age, setAge] = useState(props.result.age);
  // const [blood_type, setBloodType] = useState(props.result.blood_type);
  // const [phone_number, setPhoneNumber] = useState(props.result.phone_number);
  // const [location, setLocation] = useState(props.result.location);
  // const [chronic_diseases, setChronicDiseases] = useState(
  //   props.result.chronic_diseases
  // );
  // const [date, setDate] = useState(props.result.data);
  const handlesubmit = async (e) => {
    let data = new FormData();
    e.preventDefault();
    data.append("first_name", e.target.firstname.value);
    data.append("last_name", e.target.lastname.value);
    data.append("username", e.target.username.value);
    data.append("email", e.target.email.value);
    // data.append("password",e.target.password.value)
    data.append("age", e.target.age.value);
    data.append("image", e.target.img.files[0]);
    data.append("blood_type", e.target.blood_type.value);
    data.append("phone_number", e.target.phone_number.value);
    data.append("location", e.target.location.value);
    data.append("chronic_diseases", chronic_diseases);
    data.append("data", e.target.date.value);
    let url = "http://127.0.0.1:8000/account/yaseen";
    console.log(e.target.img.files[0]);
    const create = axios
      .put(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        props.setResult(res.data);
      });
    props.setEditForm(false);
  };
  return (
    <>
      <div>
        <div className="w-4/5 m-auto ">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
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
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
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
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="flex items-center mt-1">
                      <span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                        <svg
                          className="w-full h-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
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
