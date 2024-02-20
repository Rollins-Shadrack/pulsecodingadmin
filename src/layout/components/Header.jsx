import { BellRing, MessageSquareMore } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center  justify-end max-w-screen-3xl mx-auto w-full px-2.5 md:px-20 py-5">
      <div className="flex space-x-8 items-center">
        <div className="flex space-x-1">
          <div className="p-2 rounded-full flex items-center justify-center relative">
            <BellRing className="w-6 h-6" />
            <div className="absolute -top-2 w-fit h-fit px-1 rounded-full -right-1 font-semibold bg-red-500 text-white">10</div>
          </div>

          <div className="p-2 rounded-full flex items-center justify-center relative">
            <MessageSquareMore className="w-6 h-6" />
            <div className="absolute -top-2 w-fit h-fit px-1 rounded-full -right-1 font-semibold bg-red-500 text-white">10</div>
          </div>
        </div>
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
            alt="@shadcn"
            className="object-cover"
          />
          <AvatarFallback>R&R</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
