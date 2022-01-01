import { useState } from "react";
import EditForm from "./editForm";
import axios from "axios";

function UserProfile() {
  const [result, setResult] = useState([]);
  const [editForm, setEditForm] = useState(false);
  let submitHandler = async (e) => {
    e.preventDefault();
    await axios.get("http://127.0.0.1:8000/account/yaseen").then((data) => {
      setResult(data.data);
      setEditForm(true);
    });
  };
  return (
    <>
      <div>
        <img
          src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61688aa1d4a8658c3f4d8640%2FAntonio-Juliano%2F0x0.jpg%3Ffit%3Dscale"
          alt="person"
        />
        <h1>User1</h1>
      </div>

      <div>
        <button
          className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50"
          onClick={submitHandler}
        >
          Edit
        </button>
        {!editForm ? (
          <div>
            <h1>Personal Information</h1>
            <h2>Location: {result.location}</h2>
            <h2>Phone Number: {result.phone_number}</h2>
            <h2>Email: {result.email}</h2>
          </div>
        ) : (
          <EditForm result = {result}/>
        )}
      </div>
    </>
  );
}

export default UserProfile;
