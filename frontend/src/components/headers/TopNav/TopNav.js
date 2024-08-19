import React from "react"
import { FaSearch } from "react-icons/fa";

const TopNav = ()=>{

  return (
    <>
    <div className="w-full h-auto">
          <div className="w-full my-2 mr-3 flex">

            <input type="text" placeholder="Search" className="w-[95%] p-2 mr-3 border-hidden focus:outline-none bg-gray-300 rounded-2xl"/>

            <button className="absolute right-12 top-6">
              <FaSearch/>
            </button>

          </div>
    </div>
    </>
  )
}


export default TopNav;