"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Component } from "@/components/component/component";
import { Linegraph } from "@/components/component/linegraph";
import { cardData } from "@/Data/cardData";
import DoughnutChart from "@/components/component/Dhoughnutchart";

const ThirdFrame = () => {
  return (
    <main className="bg-white p-4">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white rounded border border-black mb-4 md:flex">
        <h3>LOGO</h3>
        <div className="flex space-x-4">
          <h3>Home</h3>
          <h3>Dashboard</h3>
          <h3>Tasks</h3>
          <h3>Projects</h3>
          <h3>Reporting</h3>
          <h3>User</h3>
        </div>
        <input
          type="search"
          className="border border-black px-3 py-1 rounded"
          placeholder="Search..."
        />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>

      {/* Main Content */}
      <div className="flex flex-wrap gap-10 w-full m-auto pt-10" >
        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 w-5/12 sm:w-12/12">
          {cardData.map((card, index) => (
            <div key={index} className="shadow rounded p-4">
              <div className="flex items-center mb-2">
                <div>{card.logo}</div>
                <div className="font-bold ml-2">{card.title}</div>
              </div>
              <h1 className="mb-1">{card.value}</h1>
              <span
                className={`text-${
                  card.changeDirection === "up" ? "green" : "red"
                }`}
              >
                {card.changeDirection === "up" ? "↑" : "↓"}
                {card.change}
              </span>
            </div>
          ))}
        </div>

        {/* Component */}
        <div className="w-6/12 sm:12/12">
          <Component />
        </div>
      </div>

      {/* Graphs */}
      <div className="flex gap-10 flex-wrap mt-2 w-full pt-10" >
        <div
          className="shadow rounded w-5/12 sm:12/12"
          style={{ height: "300px" }}
        >
          <Linegraph />
        </div>
        <div
          className="shadow rounded w-6/12 sm:12/12"
          style={{ height: "300px" }}
        >
          <div style={{width:"50%", margin:"auto"}}>
            <DoughnutChart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThirdFrame;
