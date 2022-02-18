import React from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import ReactPlayer from "react-player";

export default function DetailPage() {
  return (
    <div className="relative pt-24">
      {/* navbar */}
      <div className="fixed top-0 bg-white w-full h-20 shadow-lg shadow-slate-300">
        <div className="px-5 py-3  flex items-center justify-between ">
          <div class="flex-1 flex items-center">
            <img
              className="w-10 h-10 object-cover flex-shrink-0"
              src="/static/images/logo.png"
              alt=""
            />
            <h1 className="ml-2 font-extrabold text-3xl">Code Academy</h1>
          </div>
          {/* tengah */}
          <div className="flex-1 flex items-center m-auto">
            <div className="relative w-full flex items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-4 absolute"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "gray", fontSize: 16 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="p-3 pl-10 bg-slate-200 w-full tracking-wider outline-red-600 border-none rounded-full text-sm"
                placeholder="Search for anything"
              />
            </div>
          </div>

          {/* right */}
          <div className="flex-1 p-1 flex justify-end w-fit h-fit">
            <div className="flex p-2 border items-center border-solid border-red-600 rounded-full hover:bg-red-200">
              <img
                className="w-8 h-8 bg-gray-300 object-cover rounded-full"
                src="/static/images/jangnara.jpg"
                alt=""
              />
              <div className="font-normal ml-2">
                <Menu as="div" className="relative font-normal">
                  <Menu.Button className="flex  ">
                    <h1 className="text-red-600 font-extrabold" >me</h1>
                    <ChevronDownIcon
                      className="w-5 h-7 -mr-1 text-red-600"
                      aria-hidden="true"
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-red-200 text-black"
                                  : "text-black"
                              } group flex font-extrabold rounded-md justify-center items-center w-full px-2 py-2 text-sm`}
                            >
                              My Apply
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* containts */}
      <div className="flex">
        <div className="w-full h-full m-8">
          <h1 className="font-bold text-3xl">NodeJS</h1>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            quae itaque aliquid aspernatur, laborum aut iure eos provident saepe
            praesentium dolore autem delectus neque repellendus architecto eum
            veniam consequuntur ea.
          </p>
          <div className="flex my-5">
            <div class="mr-5 flex items-center">
              <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#FFFFFF"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h1 className="font-extrabold">190 talents</h1>
            </div>

            <div class="mr-5 flex items-center">
              <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#FFFFFF"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h1 className="font-extrabold">12 batch</h1>
            </div>

            <div class="mr-5 flex items-center">
              <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#FFFFFF"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="font-extrabold">3 month</h1>
            </div>

            <div class="mr-5 flex items-center">
              <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#FFFFFF"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h1 className="font-extrabold">
                Current batch, until february 2022
              </h1>
            </div>
          </div>

          <hr className="my-5 h-0.5 text-gray-600 bg-gray-600" />

          <div>
            <h1 className="font-extrabold text-2xl">What you'll learn</h1>
            <ul className="m-0 p-0 list-none flex flex-wrap my-5">
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
              <li className="w-3/6 mb-2.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Javascript Fundamental
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-extrabold text-2xl">Bootcamp Material</h1>
            {/* <ul className="my-5 m-0 p-0 list-none">
              <li className="mb-2.5">Day01</li>
              <li className="mb-2.5">Day02</li>
              <li className=" mb-2.5">Day03</li>
            </ul> */}

            <div className="w-full bg-white rounded-2xl my-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 text-sm font-medium text-left text-black bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 mr-2 text-red-600`}
                      />
                      <span>Day01</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black">
                      <ul className="ml-7 p-0 list-none">
                        <li className="mb-2.5">Condition If</li>
                        <li className="mb-2.5">Iteration</li>
                        <li className=" mb-2.5">Arrays</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full px-4 py-2 text-sm font-medium text-left text-black bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 mr-2 text-red-600`}
                      />
                      <span>Day02</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black">
                      <ul className="ml-7 p-0 list-none">
                        <li className="mb-2.5">Condition If</li>
                        <li className="mb-2.5">Iteration</li>
                        <li className=" mb-2.5">Arrays</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full px-4 py-2 text-sm font-medium text-left text-black bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 mr-2 text-red-600`}
                      />
                      <span>Day03</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black">
                      <ul className="ml-7 p-0 list-none">
                        <li className="mb-2.5">Condition If</li>
                        <li className="mb-2.5">Iteration</li>
                        <li className=" mb-2.5">Arrays</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          <h1 className="font-bold text-2xl">Description</h1>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            quae itaque aliquid aspernatur, laborum aut iure eos provident saepe
            praesentium dolore autem delectus neque repellendus architecto eum
            veniam consequuntur ea.
          </p>

          <div className="my-5 flex border border-solid border-gray-600 bg-red-200 p-5 rounded-2xl">
            {/* img container */}
            <div className="flex pr-1.5 flex-shrink-0">
              <img
                className="w-40 h-40 rounded-full"
                src="/static/images/jangnara.jpg"
                alt=""
              />
            </div>
            {/* info container */}
            <div className="ml-3 pl-1.5">
              <h1 className="font-bold">Kang Dian</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis quae itaque aliquid aspernatur, laborum aut iure eos
                provident saepe praesentium dolore autem delectus neque
                repellendus architecto eum veniam consequuntur ea.
              </p>
              <div className="flex my-5 justify-end">
                <div class="mr-2 flex items-center">
                  <div className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-blue-600 flex items-center justify-center">
                    <Facebook className="text-white" />
                  </div>
                </div>

                <div class="mr-2 flex items-center">
                  <div className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-sky-500 flex items-center justify-center">
                    <Twitter className="text-white" />
                  </div>
                </div>

                <div class="mr-2 flex items-center">
                  <div className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-pink-600 flex items-center justify-center">
                    <Instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flex right */}
        <div className="flex flex-col w-7/12 h-fit p-5">
          <div className="flex-1 border border-solid border-gray-600 rounded-2xl p-5">
            {/* <img
              className=""
              src="https://www.pngplay.com/wp-content/uploads/9/Gigi-Hadid-Transparent-PNG.png"
              alt=""
            /> */}
            <div className="">
              <ReactPlayer
                height="15rem"
                width="100%"
                url="https://youtu.be/RCP69vBIN6M"
                controls={true}
              />
            </div>
            <div className="my-5 mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#D2042D"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              Next Batch, April 2022
            </div>
            <div className="mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="#D2042D"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
              Sentul, Bogor, Jawa Barat
            </div>
            <div className="mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#D2042D"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              0813333333
            </div>
            <button className="mb-8 w-full p-2.5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700">
              Apply Regular Bootcamp
            </button>
            {/* Persyaratan */}
            <h1 className="mb-2.5 font-bold">Persyaratan :</h1>
            <ul className=" mb-5 m-0 p-0 list-none">
              <li className="mb-2.5">Usia maksimal 26 tahun</li>
              <li className="mb-2.5">Pendidikan SMK RPL/D3</li>
              <li className=" mb-2.5">
                S1 Teknik Informatika/Sistem Informasi
              </li>
              <li className=" mb-2.5">
                Memiliki passion di bidang pemrograman
              </li>
              <li className=" mb-2.5">Pengalaman dibidang RDBMS dan SQL</li>
              <li className=" mb-2.5">Mampu bekerja sama dalam team</li>
            </ul>

            {/* Benefit */}
            <h1 className="mb-2.5 font-bold">Benefit:</h1>
            <ul className=" m-0 p-0 list-none">
              <li className="mb-2.5">Disediakan laptop</li>
              <li className="mb-2.5">Makan gratis 3x sehari</li>
              <li className=" mb-2.5">Sertifikat</li>
              <li className=" mb-2.5">Berkesempatan terlibat dalam proyek</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
