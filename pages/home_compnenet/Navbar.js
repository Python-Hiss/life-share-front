import React from "react";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(true);
  return (
    <>
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <img
                style={{width: '80px'}}
                className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed uppercase text-blueGray-700 whitespace-nowrap"
                src='/img/logo.png'
              />
              
            </Link>
            
          </div>
          <div
            className="divnavbar">
            <ul style={{display: 'flex'}} >
              <li  id="textdocs">
                  Home
              </li>
              <li  id="textdocs">
                  Profile
              </li>
              <li id="textdocs">
                  Post
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}