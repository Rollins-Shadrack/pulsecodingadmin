import React from "react";
import logo from "@/assets/logowhite.png";
import { menu } from "@/constants/sidebar";
import { Link } from "react-router-dom";
import DropdownMenu from "@/components/DropdownMenu";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <div className="flex flex-col fixed gap-6 h-full bg-black text-white w-16 lg:w-64 ">
      <div className={cn("px-4 mt-10")}>
        <img src={logo} alt="pulsecoding.com" className="w-40" />
        <div className="mt-8 flex flex-col space-y-2">
          {menu.map((item, idx) =>
            item.submenu ? (
              <DropdownMenu key={idx} label={item.name} items={item.submenu} icon={item.icon} />
            ) : (
              <Link to={item.link} key={idx} className={`group flex items-center text-md font-normal rounded-md p-2`}>
                <div className="">{React.createElement(item.icon, { size: "20" })}</div>
                <h2 className={`whitespace-pre duration-500 ml-4 lg:flex hidden`}>{item.name}</h2>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
