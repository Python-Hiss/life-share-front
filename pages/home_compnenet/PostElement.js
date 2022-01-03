import React from "react";

export default function PostElement() {
  return (
    <>
      <div className="mt-7 w-4/5 m-auto ">
          <div className=" m-auto  w-4/5">

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
          <p className="text-2xl p-6">
            {" "}
            <h1>title</h1>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veritatis quam ut deserunt numquam facilis, et porro repellat sequi
            est dicta obcaecati ducimus deleniti illo distinctio accusantium.
            Et, voluptate sit?
          </p>
    <div className="flex justify-end">
        <div className="inline rounded-xl border border-red-700 w-12 h-10 text-red-700 items-center flex ">
            <p className="text-center w-full">AB+</p> 
        </div>
        </div>
    </div>
        
  
      </div>
    </>
  );
}
