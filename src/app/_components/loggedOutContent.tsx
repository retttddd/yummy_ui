"use client"
import React from "react";

export default function LoggedOutContent({
                                                 children,
                                               }: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-[#2e026d] to-[#15162c] p-6 text-white gap-6">
      <h2 className="text-xl md:text-xl font-bold w-full text-center ">
        But Before you order...
      </h2>
      <div>
        {children}
      </div>
    </div>
  );
}
