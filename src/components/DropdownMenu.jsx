import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {ChevronDown, ChevronRight} from "lucide-react"

const DropdownMenu = ({ items, label, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" group">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-between text-md font-normal rounded-md p-2 cursor-pointer ${
          isOpen && "transition-all ease-in-out duration-500"
        }`}>
        <div className=" flex items-center">
          <div>{React.createElement(icon, { size: "20" })}</div>
          <h2 className="whitespace-pre duration-500 ml-4 lg:flex hidden">{label}</h2>
        </div>
        {isOpen ? <ChevronDown className="w-5 h-5  " /> : <ChevronRight className="w-5 h-5 " />}
      </div>
      {isOpen && (
        <div className=" mx-4 space-y-2 bg-black text-white p-2 rounded-md transition-all ease-in-out duration-500">
          {items.map((item, idx) => (
            <Link key={idx} to={item.link} className="group flex items-center text-md font-normalrounded-md p-2">
              <div className="">{React.createElement(item.icon, { size: "20" })}</div>
              <h2 className="whitespace-pre duration-500 ml-4 lg:flex hidden">{item.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu