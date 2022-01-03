import { useState } from "react";
import axios from "axios";
import { comment } from "postcss";
import { Component } from "react/cjs/react.production.min";

export default function Example(props) {
  const [first_name, setFirstName] = useState(props.result.first_name);
  const [last_name, setLastName] = useState(props.result.last_name);
  const [image, setImage] = useState(props.result.image);
  const [username, setUsername] = useState(props.result.username);
  const [email, setEmail] = useState(props.result.email);
  const [age, setAge] = useState(props.result.age);
  const [blood_type, setBloodType] = useState(props.result.blood_type);
  const [phone_number, setPhoneNumber] = useState(props.result.phone_number);
  const [location, setLocation] = useState(props.result.location);
  const [chronic_diseases, setChronicDiseases] = useState(
    props.result.chronic_diseases
  );
  const [date, setDate] = useState(props.result.data);
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
        <div className=" w-4/5 m-auto">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
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
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                          type="text"
                          name="first-name"
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Change
                      </button>
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

// function EditForm(props) {

//   return (
//     <div>
//       <h1 className="text-center text-4xl text-blue-900">Update Personal Information</h1>
//       <form action="" onSubmit={handlesubmit} id="form-of-user">
//         <label htmlFor="">First Name</label>
//         <input
//           type="text"
//           defaultValue={first_name}
//           onChange={(e) => {
//             setFirstName(e.target.value);
//           }}
//           name="firstname"
//         />
//         <br />
//         <label htmlFor="">Last Name</label>
//         <input
//           type="text"
//           defaultValue={props.result.last_name}
//           onChange={(e) => {
//             setLastName(e.target.value);
//           }}
//           name="lastname"
//         />
//         <br />
//         <label htmlFor="">Image</label>
//         <input
//           type="file"
//           ref={(input) => {
//             Component.inpuElement = input;
//           }}
//           accept="image/*"
//           name="img"
//         />
//         <br />
//         <label htmlFor="">User Name</label>
//         <input
//           type="text"
//           defaultValue={props.result.username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//           name="username"
//         />
//         <br />
//         <label htmlFor="">Email</label>
//         <input
//           type="text"
//           defaultValue={props.result.email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           name="email"
//         />
//         <br />
//         <label htmlFor="">Age</label>
//         <input
//           type="text"
//           defaultValue={props.result.age}
//           onChange={(e) => {
//             setAge(e.target.value);
//           }}
//           name="age"
//         />
//         <br />
//         <label htmlFor="">Blood Type</label>
//         <input
//           type="text"
//           defaultValue={props.result.blood_type}
//           onChange={(e) => {
//             setBloodType(e.target.value);
//           }}
//           name="blood_type"
//         />
//         <br />
//         <label htmlFor="">Phone Number</label>
//         <input
//           type="text"
//           defaultValue={props.result.phone_number}
//           onChange={(e) => {
//             setPhoneNumber(e.target.value);
//           }}
//           name="phone_number"
//         />
//         <br />
//         <label htmlFor="">Location</label>
//         <input
//           type="text"
//           defaultValue={props.result.location}
//           onChange={(e) => {
//             setLocation(e.target.value);
//           }}
//           name="location"
//         />
//         <br />
//         <div id="cd">
//           <label htmlFor="">Chronic Diseasese</label>
//           <input
//             type="checkbox"
//             defaultValue={props.result.chronic_diseases}
//             onChange={(e) => {
//               setChronicDiseases(e.target.checked);
//             }}
//             name="chronic_diseases"
//           />
//         </div>

//         {/* <br /> */}
//         <label htmlFor="">Date of Last Donation</label>
//         <input
//           type="date"
//           defaultValue={props.result.data}
//           onChange={(e) => {
//             setDate(e.target.value);
//           }}
//           name="date"
//         />
//         <button
//           className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50"
//           type="submit"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditForm;
