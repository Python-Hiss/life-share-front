
import React from "react";
import axios from "axios";
import { useAuth } from '../../contexts/auth'
import { useState, useEffect } from "react";

export default function PostElement(props) {
  const { tokens } = useAuth();
  const [showform, setshowform] = useState(false);
  const [itemupdate, setItemupdate] = useState("");
  const handleform =  (item)=>{
    // e.preventDefault()
    setshowform(true)
    setItemupdate(item)
    console.log(itemupdate);
  }
  return (
    <>
    {showform ? <p>hi</p>:
    props.result.map((item, idx) => {


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
              {item.patient == tokens.username &&
                <div className="flex justify-end">
                  <button onClick={()=>handleform(item)} >update</button>
                  <button onClick={()=>props.handledelete(item)}>delete</button>
                </div>
              }
            </div>

          </div>
        </div>

      );
    })}
  </>
  )
}