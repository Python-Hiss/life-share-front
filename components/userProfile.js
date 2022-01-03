import { useState, useEffect } from "react";
import EditForm from "./editForm";
import axios from "axios";
import { PencilAltIcon } from "@heroicons/react/outline";
import UserInfo from "../pages/home_compnenet/UserInfo";
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
        <h1 className="text-center text-4xl text-blue-900">
          {result.first_name}
        </h1>

        <div className="mt-12">
          {!editForm ? (
            <>
              <UserInfo result={result} submitHandler={submitHandler}/>
              
              <button
                className=" h-9 w-36 ml-52 mt-12 rounded-lg border-2 border-red-600 border-dashed text-red-600"
                onClick={deleteHandler}
              >
                Remove Account
              </button>
            </>
          ) : (
            <EditForm
              result={result}
              setEditForm={setEditForm}
              setResult={setResult}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
