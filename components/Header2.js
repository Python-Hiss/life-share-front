import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState ,useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/auth";
import Link from "next/link";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header2() {
  
  const {tokens ,logout } = useAuth();
  let role = {
    Doner: "donater",
    Patient: "patient",
    Hospital:"hospital"
  };
  const [result, setResult] = useState([]);
  useEffect(async () => {
    
    await axios
      .get(`https://lifeshareproject.herokuapp.com/accounts/${role[tokens.Role]}/${tokens.id}`)
      .then((data) => {
        setResult(data.data);
        console.log(result.image);
      });
      
  }, []);

  return (
    <Disclosure as="nav" className="fixed top-0 z-50 w-full headernav">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-start flex-1 gap-3 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="/img/logo.png"
                    // alt="Workflow"
                  />
                </div>
                <div className="flex items-center flex-shrink-0">
                <h1 className="text-white">Life Share</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link href = "../Newsfeed"> 
                    <a className="text-white">
                      News Feed
                    </a></Link>
                  
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="object-cover w-8 h-8 rounded-full"
                        src={result.image}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link  href="../Profile">
                          <a
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                         </Link>           
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                           <a
                            href="/"
                            onClick={logout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                          // </Link>
                         
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
