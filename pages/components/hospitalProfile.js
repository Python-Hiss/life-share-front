import axios from "axios";
import { useState } from "react";


function HospitalProfile() {
  const [result, setResult] = useState([]);
  const [location, setLocation] = useState([]);
  const [bloodType, setBloodType] = useState([]);

  let locationHandler = (e) => {
    setLocation(e.target.value)
  };
  let bloodTypeHandler = (e) => {
    setBloodType(e.target.value)
  };
  let submitHandler = async (e) => {
    e.preventDefault();
    await axios.get("http://127.0.0.1:8000/account/view/").then((data) => {
      let newData = data.data
      let filteredData = newData.filter(item =>item.blood_type == bloodType && item.location == location)
      setResult (filteredData)
    });
  };
  return (
    <>
      <div>
        <img
          src="https://cdn.britannica.com/w:400,h:300,c:crop/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg"
          alt="hospital"
        />
        <h1>Isteqlal</h1>
      </div>

      <div>
        <h2>
          <a href="https://istiklalhospital.com/">Website</a>
        </h2>
      </div>

      <div>
        <form onSubmit={submitHandler}>
          <label>Blood Type</label>
          <input type="text" onChange={bloodTypeHandler} />
          <label>Location</label>
          <input type="text" onChange={locationHandler} />
          <button
            type="submit"
            className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50"
          >
            Search
          </button>
        </form>

        <table className="w-5/6 mx-auto mt-6 text-center">
          <thead className="bg-emerald-400 border border-emerald-700 text-left h-8">
            <th className="border border-emerald-700 pl-1">Name</th>
            <th className="border border-emerald-700 pl-1">Location</th>
            <th className="border border-emerald-700 pl-1">Blood Type</th>
            <th className="border border-emerald-700 pl-1">Phone Number</th>
            <th className="border border-emerald-700 pl-1">Age</th>
            <th className="border border-emerald-700 pl-1">Chronic Disease</th>
            <th className="border border-emerald-700 pl-1">Email</th>
          </thead>
          <tbody>
            {result.map((item) => {
              return (
                <tr
                  key={item[1]}
                  className="even:bg-emerald-300  odd:bg-emerald-200 border border-emerald-700 h-10 place-self-center"
                >
                        <td>{`${item.first_name} ${item.last_name}`}</td>
                        <td>{item.location}</td>
                        <td>{item.blood_type}</td>
                        <td>{item.phone_number}</td>
                        <td>{item.age}</td>
                        <td>{item.chronic_diseases}</td>
                        <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HospitalProfile;
