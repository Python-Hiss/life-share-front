import { useState, useEffect } from "react";
import EditForm from "./editForm";
import axios from "axios";
import { useAuth } from "../../contexts/auth";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Result } from "postcss";
import UserInfo from "../home_compnenet/UserInfo";

function UserProfile() {
  const {tokens } = useAuth();
  let role = {
    Doner: "donater",
    Patient: "patient",
  };
  const [result, setResult] = useState([]);
  const [editForm, setEditForm] = useState(false);
  let submitHandler = async (e) => {
    e.preventDefault();
    setEditForm(true);
  };
  let deleteHandler = async () => {
    await axios.delete(
      `http://127.0.0.1:8000/accounts/${role[tokens.Role]}/${tokens.id}`
    );
  };
  useEffect(async () => {
    await axios
      .get(`http://127.0.0.1:8000/accounts/${role[tokens.Role]}/${tokens.id}`)
      .then((data) => {
        setResult(data.data);
      });
  }, []);

  return (
    <>
      <div className="">
        <div className=" bg-top p-5 bg-[length:100%_50%]  bg-[url('https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-red-solid-color-background.jpg')] bg-no-repeat ">
          <img
            src={result.image}
            alt="person"
            className="object-cover m-auto rounded-full h-80 w-80"
          />
        </div>
        <h1 className="text-4xl text-center text-blue-900">
          {result.first_name}
        </h1>

        <div className="mt-12">
          {!editForm ? (
            <>
              <UserInfo result={result} submitHandler={submitHandler} />

              <button
                className="mt-12 text-red-600 border-2 border-red-600 border-dashed rounded-lg  h-9 w-36 ml-52"
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
