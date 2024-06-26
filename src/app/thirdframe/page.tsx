"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Component } from "@/components/component/component";
import { Linegraph } from "@/components/component/linegraph";
import { cardData } from "@/Data/cardData"; 
import DoughnutChart from "@/components/component/Dhoughnutchart";

const thirdframe = () => {
  return (
    <main
      className="bg-white content-center"
      style={{ width: "99%", margin: "auto" }}
    >
      <nav
        className="flex"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "1px solid black",
        }}
      >
        <h3>LOGO</h3>
        <h3>Home</h3>
        <h3>Dashboard</h3>
        <h3>Tasks</h3>
        <h3>Projects</h3>
        <h3>Reporting</h3>
        <h3>User</h3>
        <input
          type="search"
          style={{
            border: "1px solid black",
            padding: "3px",
            borderRadius: "4px",
            marginLeft: "30%",
          }}
          placeholder="search..."
        />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>

      <div className="flex" style={{ width: "100%", margin: "auto", alignContent: "baseline" }}>
        <div className="grid grid-cols-2 gap-4 m-3" style={{ width: "50%" }}>
          {cardData.map((card: { logo: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; value: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; changeDirection: string; change: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
            <div key={index} className="shadow rounded p-6">
              <div className="flex gap-6 mb-2">
                <div>{card.logo}</div>
                <div style={{fontWeight:"bold"}}>{card.title}</div>
              </div>
              <h1 className="mb-1">{card.value}</h1>
              <span style={{ color: card.changeDirection === "up" ? "green" : "red" }}>
                {card.changeDirection === "up" ? "↑" : "↓"}
                {card.change}
              </span>
            </div>
          ))}
        </div>
        <div style={{ width: "60%" }}>
          <Component />
        </div>
      </div>

      <div className="flex" style={{ width: "100%", margin: "auto", alignContent: "baseline" }}>
        <div style={{ width: "60%" }}>
          <Linegraph />
        </div>
        <div style={{ width: "60%" }}>
          <DoughnutChart/>
        </div>
      </div>
    </main>
  );
};

export default thirdframe;
