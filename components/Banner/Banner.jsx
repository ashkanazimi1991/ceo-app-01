import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link';

function Banner() {
  return (
    
    











    <div className="pl-12 flex flex-col space-y-12 -z-10   md:space-y-10  h-[80vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 right-0 -z-10 bg-gradient-to-bl from-gray-700 via-gray-900 to-black h-[100vh] w-screen">
       <img className=" pt-10  object-cover z-10 bg-[#0E1014] "src="/images/crypto650.gif" alt="مدیریت آنلاین"/>
      </div>
      <h1 className='text-2xl font-bold pt-60 text-[#fdfdfd]  md:text-4xl  lg:text-5xl'>Welcome to Community</h1>
      <p className="rounded-3xl max-w-xs text-xs  bg-gradient-to-r from-[#142028] p-5 text-[#b7b5b5] text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
      our community Supports your Programming needs such as, building platforms, Software, IoT, Robotic & Native apps as Windows, ios & Android apps.
      </p>
      <div className="flex space-x-3 pb-10 ">
       
        <Link href='auth/login'>
          <button   className="bannerButton rounded-3xl pl-5 pr-20 text-[#fff] bg-gradient-to-r from-[#22D3EE]/70" >
            <InformationCircleIcon className="h-5 w-5 text-[#fdfdfd] md:h-8 md:w-8" /> Start Here !!!!
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Banner