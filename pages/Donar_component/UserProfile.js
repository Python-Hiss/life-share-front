import { useState, useEffect } from "react";
import EditForm from "./editForm";
import axios from "axios";
import { useAuth } from "../../contexts/auth";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Result } from "postcss";
import UserInfo from "./UserInfo";
import Header2 from "../layout/Header2";
import Footer from "../home_compnenet/Footer";
function UserProfile() {
  const { tokens } = useAuth();
  let role = {
    Doner: "donater",
    Patient: "patient",
  };
  const [result, setResult] = useState([]);
  const [blood, setBlood] = useState();
  const [address, setAddress] = useState();
  const [editForm, setEditForm] = useState(false);
  let submitHandler = async (e) => {
    e.preventDefault();
    setEditForm(true);
  };
  let deleteHandler = async () => {
    await axios.delete(
      `https://lifeshareproject.herokuapp.com/accounts/${role[tokens.Role]}/${tokens.id}`
    );
  };
  useEffect(async () => {
    await axios
      .get(`https://lifeshareproject.herokuapp.com/accounts/${role[tokens.Role]}/${tokens.id}`)
      .then((data) => {
        setResult(data.data);
        axios.get(`https://lifeshareproject.herokuapp.com/blood/update-blood/${data.data.blood_type}/`)
          .then((data) => {setBlood(data.data.blood_type);});
        // axios.get(`https://lifeshareproject.herokuapp.com/address/address/${data.data.address}/`)
        //   .then((data) => {setAddress(data.data.city.city);});
      })
  
      
  }, []);

  return (
    <>
      <Header2 />
      <div className="">
        <div className="bg-top bg-[length:100%_50%] h-[35rem] p-[7rem] bg-[url('https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-red-solid-color-background.jpg')] bg-no-repeat ">
          <img
            src="https://thumbs.dreamstime.com/b/male-icon-vector-user-person-profile-avatar-flat-color-glyph-pictogram-illustration-117610350.jpg "
            alt="person"
            className="object-cover m-auto rounded-full h-80 w-80"
          />
          <h1 className="text-4xl text-center text-blue-900 m-9">
            {result.first_name}
          </h1>
        </div>

        <div className="mt-12">
          {!editForm ? (
            <>
              <UserInfo
                result={result}
                submitHandler={submitHandler}
                blood={blood}
                address = {address}
              />

              <button
                className="mt-12 text-red-600 border-2 border-red-600 border-dashed rounded-lg h-9 w-36 ml-52"
                onClick={deleteHandler}
              >
                <a href="/"> Remove Account</a>
              </button>
            </>
          ) : (
            <EditForm
              setBlood = {setBlood}
              setAddress = {setAddress}
              result={result}
              setEditForm={setEditForm}
              setResult={setResult}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
