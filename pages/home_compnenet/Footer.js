import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="relative bg-red-900 pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">Life Share</h4>
              <h5 className="text-lg mt-0 mb-2 text-white ">
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://healthmatters.nyp.org/the-surprising-benefits-of-donating-blood/"
                    target="_blank"
                  >
                    The Surprising Benefits of Donating Blood
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.lifeservebloodcenter.org/education/fun-facts-about-blood/"
                    target="_blank"
                  >
                    Amazing Facts about Blood Donation
                  </a>
                </li>

              </ul>

            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/Python-Hiss"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                    <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                        target="_blank"
                      >
                        Contact Us
                      </a>
                    
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} Python-Hiss{" "}

                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
