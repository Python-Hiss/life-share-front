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
    await axios.delete("http://127.0.0.1:8000/account/yaseen");
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
        <h1 className="text-center text-4xl text-blue-900">{result.first_name}</h1>
        <div className="mt-12">
          {!editForm ? (
            <>
              <div className="bg-[#EEEBDD] rounded-lg p-2 relative w-4/5 m-auto">
                <h1 className="text-center text-4xl text-red-700 ml-1.5	">
                  Personal Information
                </h1>
                <div className="flex justify-end">
                  <PencilAltIcon
                    onClick={submitHandler}
                    type="submit"
                    className="h-5 w-5  absolute top-1 right-1 mr-4 mt-4"
                  />
                </div>
                <h2 className=" text-2xl text-[#1B1717] ml-1.5">Location:</h2>
                <p className="pl-12 text-xl text-[#CE1212]">{result.location}</p>

                <h2 className=" text-2xl text-[#1B1717] ml-1.5	border-t-2 border-white">
                  Phone Number:
                </h2>
                <p className="pl-12 text-xl text-[#CE1212]">{result.phone_number}</p>
                <h2 className=" text-2xl text-[#1B1717] ml-1.5	border-t-2 border-white">
                  Email:
                </h2>
                <p className="pl-12 text-xl text-[#CE1212]">{result.email}</p>
                <h2 className=" text-2xl text-[#1B1717] ml-1.5 	border-t-2 border-white">Blood Type:</h2>
                <p className="pl-12 text-xl text-[#CE1212]">{result.blood_type}</p>
                <h2 className=" text-2xl text-[#1B1717] ml-1.5 	border-t-2 border-white">Age:</h2>
                <p className="pl-12 text-xl text-[#CE1212]">{result.age}</p>
              </div>
              <button
                className=" h-9 bg-stone-400 ml-52 mt-12 rounded-lg 	border-t-2 border-white"
                onClick={deleteHandler}
              >
                Remove Account
              </button>
            </>
          ) : (
            <EditForm result={result} setEditForm={setEditForm} setResult = {setResult} />
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
