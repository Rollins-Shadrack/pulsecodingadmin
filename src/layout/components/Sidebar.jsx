import React from 'react'
import logo from '@/assets/logo.png'
import { menu } from '@/constants/sidebar';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const pathname = location.pathname
  return (
    <div className="flex flex-col fixed gap-6 h-full bg-black text-white w-20 lg:w-64">
      <div className="px-4 mt-10">
        <img src={logo} alt="pulsecoding.com" className="w-40" />

        <div className="mt-8 flex flex-col space-y-2">
          {menu.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              className={`group flex items-center text-md font-medium rounded-md p-2`}>
              <div className="">{React.createElement(item.icon, { size: "20" })}</div>
              <h2 className="whitespace-pre duration-500  ml-4 lg:flex hidden">{item.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar