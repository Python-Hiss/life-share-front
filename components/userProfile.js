import { useState, useEffect } from "react";
import EditForm from "./editForm";
import axios from "axios";
import { PencilAltIcon } from "@heroicons/react/outline";
function UserProfile() {
  const [result, setResult] = useState([]);
  const [editForm, setEditForm] = useState(false);
  let submitHandler = async (e) => {
    e.preventDefault();
    setEditForm(true);
  };
  let deleteHandler = async () => {
    await axios
      .delete("http://127.0.0.1:8000/account/yaseen")
      .then(console.log("hello world"));
  };
  useEffect(async () => {
    await axios.get("http://127.0.0.1:8000/account/yaseen").then((data) => {
      setResult(data.data);
    });
  }, []);

  return (
    <>
      <div className="">
        <div className=" bg-top p-5 bg-[length:100%_50%]  bg-[url('https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-red-solid-color-background.jpg')] bg-no-repeat ">
          <img
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61688aa1d4a8658c3f4d8640%2FAntonio-Juliano%2F0x0.jpg%3Ffit%3Dscale"
            alt="person"
            className="rounded-full h-80 w-80 object-cover m-auto"
          />
        </div>
        <h1 className="text-center text-4xl text-blue-900">User1</h1>
        <div className="mt-12">
          {!editForm ? (
          <>
            <div className="bg-red-400 rounded-lg p-2 relative w-4/5 m-auto">
              <h1 className="text-center text-4xl text-white ml-1.5	">Personal Information</h1>
              <div className="flex justify-end">
                <PencilAltIcon
                  onClick={submitHandler}
                  type="submit"
                  className="h-5 w-5  absolute top-1 right-1"
                />
              </div>
              <h2 className=" text-2xl text-white ml-1.5">Location:</h2>
              <p>{result.location}</p>

              <h2 className=" text-2xl text-white ml-1.5	border-t-4 border-white">Phone Number:</h2>
              <p>{result.phone_number}</p>
              <h2 className=" text-2xl text-white ml-1.5	border-t-4 border-white">Email:</h2>
              <p>{result.email}</p>
              </div>
              <button className=" h-9 bg-red-500 ml-96" onClick={deleteHandler}>Remove Account</button>
          </>
          ) : (
            <EditForm result={result} setEditForm={setEditForm} />
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
