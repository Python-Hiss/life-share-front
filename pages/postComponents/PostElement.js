import { Result } from "postcss";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

  
export default function PostElement() {
  
  const [result, setResult] = useState([]);
  useEffect(async () => {
    axios.get('http://127.0.0.1:8000/blood/show/').then((res) => {
      setResult(res.data)
      console.log(res.data);
    }
    )
  }, []);
  
  return(
    

  result.map((item, idx) => {


    return (
      <div key={idx}>
        <div className="w-4/5 m-auto mt-7 ">
          <div className="w-4/5 m-auto ">

          </div>
          <div className="flex items-center gap-7">
            <img
              src="https://www.w3schools.com/w3css/img_avatar3.png"
              alt=""
              className="rounded-full w-14 h-14"
            />
            <div>
              <h1 className="text-2xl">{item.patient}</h1>
              <span className="text-xs">{item.time}</span>
            </div>
          </div>

          <div class="shadow overflow-hidden sm:rounded-md w-4/5 mt-6 ">
          <h1 className="p-6 text-4xl" >{item.title}</h1>
            <p className="p-6 text-1xl">
            {item.text}
            </p>
            <div className="flex justify-end">
              <div className="flex items-center inline w-12 h-10 text-red-700 border border-red-700 rounded-xl ">
                <p className="w-full text-center">AB+</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  })
)
}