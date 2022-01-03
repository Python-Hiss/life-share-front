import React from "react";

export default function PostElement() {
  return (
    <>
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
            <h1 className="text-2xl">name</h1>
            <span className="text-xs">22-5-2013</span>
          </div>
        </div>
      
        <div class="shadow overflow-hidden sm:rounded-md w-4/5 mt-6 ">
          <p className="p-6 text-2xl">
            {" "}
            <h1>title</h1>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veritatis quam ut deserunt numquam facilis, et porro repellat sequi
            est dicta obcaecati ducimus deleniti illo distinctio accusantium.
            Et, voluptate sit?
          </p>
    <div className="flex justify-end">
        <div className="flex items-center inline w-12 h-10 text-red-700 border border-red-700 rounded-xl ">
            <p className="w-full text-center">AB+</p> 
        </div>
        </div>
    </div>
        
  
      </div>
    </>
  );
}