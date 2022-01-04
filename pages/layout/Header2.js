import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState ,useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/auth";
import Link from "next/link";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Example() {
  const {tokens ,logout } = useAuth();
  let role = {
    Doner: "donater",
    Patient: "patient",
    Hospital:"hospital"
  };
  const [result, setResult] = useState([]);
  useEffect(async () => {
    await axios
      .get(`http://127.0.0.1:8000/accounts/${role[tokens.Role]}/${tokens.id}`)
      .then((data) => {
        setResult(data.data);
        console.log(result)
      });
  }, []);

  return (
    <Disclosure as="nav" className="bg-red-900 fixed w-full top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-start gap-3 sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/img/logo.png"
                    // alt="Workflow"
                  />
                </div>
                <div className="flex-shrink-0 flex items-center">
                <h1 className="text-white">Life Share</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <a href="" className="text-white">
                      News Feed
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full object-cover"
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          // <Link >
                          <a
                            href="/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                          // </Link>           
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          // <Link href="/">
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
