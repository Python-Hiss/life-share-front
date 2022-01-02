import { useState } from "react";
import axios from "axios";
import { comment } from "postcss";
import { Component } from "react/cjs/react.production.min";
// import 'styles/form.css'
// import FileUpload from "./components/FileUpload"
function EditForm(props) {
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
    const create = axios.put(url, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    props.setEditForm(false)
  };

  return (
    <div>
      <h1 className="text-center text-4xl text-blue-900">Update Personal Information</h1>
      <form action="" onSubmit={handlesubmit} id="form-of-user">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          defaultValue={first_name}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          name="firstname"
        />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          defaultValue={props.result.last_name}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          name="lastname"
        />
        <br />
        <label htmlFor="">Image</label>
        <input
          type="file"
          ref={(input) => {
            Component.inpuElement = input;
          }}
          accept="image/*"
          name="img"
        />
        <br />
        <label htmlFor="">User Name</label>
        <input
          type="text"
          defaultValue={props.result.username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="username"
        />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="text"
          defaultValue={props.result.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
        />
        <br />
        <label htmlFor="">Age</label>
        <input
          type="text"
          defaultValue={props.result.age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          name="age"
        />
        <br />
        <label htmlFor="">Blood Type</label>
        <input
          type="text"
          defaultValue={props.result.blood_type}
          onChange={(e) => {
            setBloodType(e.target.value);
          }}
          name="blood_type"
        />
        <br />
        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          defaultValue={props.result.phone_number}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          name="phone_number"
        />
        <br />
        <label htmlFor="">Location</label>
        <input
          type="text"
          defaultValue={props.result.location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          name="location"
        />
        <br />
        <div id="cd">
          <label htmlFor="">Chronic Diseasese</label>
          <input
            type="checkbox"
            defaultValue={props.result.chronic_diseases}
            onChange={(e) => {
              setChronicDiseases(e.target.checked);
            }}
            name="chronic_diseases"
          />
        </div>

        {/* <br /> */}
        <label htmlFor="">Date of Last Donation</label>
        <input
          type="date"
          defaultValue={props.result.data}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          name="date"
        />
        <button
          className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditForm;
