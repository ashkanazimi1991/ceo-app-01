/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link';





export default function Example() {
    return (
      <div className="relative bg-gradient-to-bl from-gray-700 via-gray-900 to-black  text-[#fff] overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className=" sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-[#fff] sm:text-3xl">
              Welcome To community
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              We Supports your Programming needs such as, building platforms, Software, IoT, Robotic & Native apps as Windows, ios & Android apps.
              </p>
              <div>
                {/* <Link href='/project'>
                <button className=" pl-5 mt-5 mr-5 pr-5 bg-gradient-to-bl from-gray-700 via-gray-900 to-black border border-transparent rounded-md">
                  <FaPlay className="h-19 w-10 text-[#fdfdfd] md:h-7 md:w-7" />   Live Demo
               </button>
                </Link> */}
                <Link href='auth/login'>
                  <button   className=" pl-5 pr-20 text-[#fff] bg-gradient-to-bl from-gray-700 via-gray-900 to-black border border-transparent rounded-md" >
                    <InformationCircleIcon className="h-5 w-5 text-[#fdfdfd] md:h-8 md:w-8" /> Start Here !!!!
                  </button>
                </Link>

              </div>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="./images/qq.jpg "
                            alt="مدیریت آنلاین"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="./images/qqq8.jpg"
                            alt="مدیریت آنلاین"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="./images/qqq3.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="./images/qqq5.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="./images/qqq6.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="./images/qqq7.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="./images/qqq9.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="/project"
                  className="inline-block text-center bg-gradient-to-bl from-gray-700 via-gray-900 to-black border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  