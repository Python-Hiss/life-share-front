import { useState } from "react";
import axios from "axios";
function EditForm(props) {
  const [first_name, setFirstName] = useState(props.result.first_name);
  const [last_name, setLastName] = useState(props.result.last_name);
  const [image, setImage] = useState(null);
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
  const submitHandler = async (e) => {
    e.preventDefault();
    let updatedData = {
      password: props.result.password,
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      age: age,
      blood_type: blood_type,
      phone_number: phone_number,
      location: location,
      chronic_diseases: chronic_diseases,
      data: date,
      donate: props.result.donate,
      group: 2,
      image: props.result.image,
    };
    await axios.put("http://127.0.0.1:8000/account/yaseen", updatedData).then(res =>{
        console.log(res.data)
    });
  };
  return (
    <div>
      <form action="">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          defaultValue={first_name}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          defaultValue={props.result.last_name}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Image</label>
        <input
          type="image"
          src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61688aa1d4a8658c3f4d8640%2FAntonio-Juliano%2F0x0.jpg%3Ffit%3Dscale"
          alt="Submit"
          width="48"
          height="48"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">User Name</label>
        <input
          type="text"
          defaultValue={props.result.username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="text"
          defaultValue={props.result.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Age</label>
        <input
          type="text"
          defaultValue={props.result.age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Blood Type</label>
        <input
          type="text"
          defaultValue={props.result.blood_type}
          onChange={(e) => {
            setBloodType(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          defaultValue={props.result.phone_number}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Location</label>
        <input
          type="text"
          defaultValue={props.result.location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Chronic Diseasese</label>
        <input
          type="checkbox"
          defaultValue={props.result.chronic_diseases}
          onChange={(e) => {
            setChronicDiseases(e.target.checked);
          }}
        />
        <br />
        <label htmlFor="">Date of Last Donation</label>
        <input
          type="date"
          defaultValue={props.result.data}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <button
          className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50"
          onClick={submitHandler}
        >Submit</button>
      </form>
    </div>
  );
}

export default EditForm;
