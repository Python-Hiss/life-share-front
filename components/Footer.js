import React from "react";
export default function Footer() {
  return (
    <>
      <footer id="footer" className="relative pt-8 pb-6 mt-16 bg-red-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold text-white">Life Share</h4>
              <h5 className="mt-0 mb-2 text-lg text-white ">
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="block pb-2 text-sm font-semibold text-white hover:text-blueGray-800"
                    href="https://healthmatters.nyp.org/the-surprising-benefits-of-donating-blood/"
                    target="_blank"
                  >
                    The Surprising Benefits of Donating Blood
                  </a>
                </li>
                <li>
                  <a
                    className="block pb-2 text-sm font-semibold text-white hover:text-blueGray-800"
                    href="https://www.lifeservebloodcenter.org/education/fun-facts-about-blood/"
                    target="_blank"
                  >
                    Amazing Facts about Blood Donation
                  </a>
                </li>

              </ul>

            </div>

            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-white hover:text-blueGray-800"
                        href=""
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-white hover:text-blueGray-800"
                        href="https://github.com/Python-Hiss"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                    <a
                        className="block pb-2 text-sm font-semibold text-white hover:text-blueGray-800"
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
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-white">
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
