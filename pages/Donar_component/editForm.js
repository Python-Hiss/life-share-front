import { useState } from "react";
import axios from "axios";
import { comment } from "postcss";
import { Component } from "react/cjs/react.production.min";
import { useAuth } from "../../contexts/auth";

export default function Example(props) {
  const { tokens } = useAuth();
  let role = {
    Doner: "donater",
    Patient: "patient",
  };
  const handlesubmit = async (e) => {
    let data = new FormData();
    e.preventDefault();
    data.append("first_name", e.target.firstname.value);
    data.append("username", e.target.username.value);
    data.append("email", e.target.email.value);
    data.append("image", e.target.img.files[0]);
    data.append("phone_number", e.target.phone_number.value);
    data.append("chronic_diseases", e.target.chronic_diseases.checked);
    data.append("blood_type", props.result.blood_type);
    if (tokens.Role == "Patient") {
      data.append("reason", e.target.reason.value);
    }
    let url = `http://127.0.0.1:8000/accounts/${role[tokens.Role]}/${
      tokens.id
    }/`;

    axios
      .put(`http://127.0.0.1:8000/blood/update-blood/1/`, {
        blood_type: e.target.bloodType.value,
      })
      .then(() => {
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
  };
  return (
    <>
      <div>
        <div className=" w-4/5 m-auto">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={handlesubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
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
                          className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                      className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
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
                      className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
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
                      className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
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
                        className="shadow-sm focus:ring-red-500 focus:border-red-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                      className="mt-1 focus:ring-red-500 focus:border-red-500 block w-2 shadow-sm sm:text-sm border-gray-300 rounded-md border"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Blood Type
                    </label>
                    <input
                      type="text"
                      name="bloodType"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
                    />
                  </div>
                 {tokens.Role == "Patient" && <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Reason
                    </label>
                    <input
                      type="text"
                      name="reason"
                      defaultValue='Empty'
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
                    />
                  </div>}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      {/* <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"> */}
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
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Change
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
