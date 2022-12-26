/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Navbar from '../Constants/Navbar';

function Fprofile() {
  return (
    <div>
      <Navbar />
      <div className="m-4 md:m-8">
        <div className="grid grid-cols-3  gap-4  ">
          <div className=" col-span-3 md:col-span-1 w-full order-1  ">
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-1 bg-slate-900  rounded-lg shadow-md ">
                <div className="flex flex-col align-center items-center pb-2">
                  <img
                    className="w-24 h-24 mt-2 rounded-full shadow-lg"
                    src="data:image/jpeg;base64,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"
                    alt="image_"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Visual Designer
                  </span>
                </div>
              </div>
              <div className="bg-slate-900 order-3 mb-10 h-24 col-span-1 rounded-lg shadow-md md:col-start-1 md:col-end-2 col-span-3">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md bg-slate-900 dark:border-gray-700">
                  <p>
                    <h5 className="mb-2 text-lg  font-bold dark:text-white">
                      Bio
                    </h5>
                  </p>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    No bio Provided
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 order-2 rounded-lg shadow-md col-span-3 md:col-start-2 col-end-4">
            <form>
              <div className="pt-2 pl-3 ">
                <h6 className="text-lg  font-bold dark:text-white">
                  Personal Informations
                </h6>
              </div>

              <div className="grid gap-6 m-4 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-6  m-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required=""
                />
              </div>
              <div className="mb-6  m-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Update Your Bio
                </label>
                <input
                  type="text"
                  id="large-input"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6  m-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  required=""
                />
              </div>
              <div className="mb-6  m-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="confirm password"
                  required=""
                />
              </div>
              <div className="m-4 ">
                <button
                  type="submit"
                  className="   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="bg-slate-900 order-4 rounded-lg shadow-md col-span-3  md:col-start-2 col-end-4">
            <div className="bg-slate-900 order-2 rounded-lg shadow-md col-span-3 md:col-start-2 col-end-4">
              <form>
                <p className="pt-2 pl-3 ">
                  <h6 className="text-lg  font-bold dark:text-white">
                    Experience
                  </h6>
                </p>
                <div className="m-4">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Company"
                    required=""
                  />
                </div>

                <div className="grid gap-6 m-4 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Company"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Place
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required=""
                    />
                  </div>
                </div>

                <div className="m-4 ">
                  <button
                    type="submit"
                    className="   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-slate-900 order-5 rounded-lg shadow-md col-span-3  md:col-start-2 col-end-4">
            <div className="bg-slate-900 order-2 rounded-lg shadow-md col-span-3 md:col-start-2 col-end-4">
              <form>
                <div className="pt-2 pl-3 ">
                  <h6 className="text-lg  font-bold dark:text-white">Skills</h6>
                </div>

                <div className="mb-6  m-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="django Developer"
                    required=""
                  />
                </div>
                <div className="mb-6  m-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Add your skills
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="python"
                    required=""
                  />
                </div>

                <div className="m-4 ">
                  <button
                    type="submit"
                    className="   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-slate-900 order-5 rounded-lg shadow-md col-span-3  md:col-start-2 col-end-4">
            <div className="bg-slate-900 order-2 rounded-lg shadow-md col-span-3 md:col-start-2 col-end-4">
              <form>
                <div className="pt-2 pl-3 ">
                  <h6 className="text-lg  font-bold dark:text-white">
                    Education
                  </h6>
                </div>

                <div className="mb-6  m-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    University
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Kerala University"
                    required=""
                  />
                </div>
                <div className="mb-6  m-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Degree
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bsc"
                    required=""
                  />
                </div>
                <div className="mb-6  m-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Field of Study
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="physics"
                    required=""
                  />
                </div>
                <div className="mb-6  m-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Languages
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="English,Malayalam"
                    required=""
                  />
                </div>
                <div className="mb-6  m-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Field of Study
                  </label>
                  <textarea
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="physics"
                    required=""
                  />
                </div>
                <div className="m-4 ">
                  <button
                    type="submit"
                    className="   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fprofile;
