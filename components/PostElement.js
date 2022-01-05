
import React from "react";
import { useAuth } from '../contexts/auth'

export default function PostElement(props) {
  const { tokens } = useAuth();


  return (
    <>
    {
    // props.showform ? <Editpost
    // itemupdate ={itemupdate}
    // handleupdate={props.handleupdate}
    // />:
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

            <div class="shadow overflow-hidden sm:rounded-md w-4/5 mt-6 bg-white">
              <h1 className="p-6 text-4xl" >{item.title}</h1>
              <p className="p-6 text-1xl">
                {item.text}
              </p>
              {item.patient == tokens.username &&
                <div className="flex justify-end">
                  <button onClick={()=>props.handleform(item)} 
                  className="inline-flex justify-center px-4 py-2 m-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >update</button>
                  <button onClick={()=>props.handledelete(item)}
                  className="inline-flex justify-center px-4 py-2 m-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >delete</button>
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