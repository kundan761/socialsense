/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import image from "@/Images/profile.png"
import Image from "next/image";

type Color =
  | "bg-white"
  | "bg-black"
  | "bg-gray-300"
  | "bg-yellow-300"
  | "bg-green-900"
  | "bg-blue-900"
  | "bg-pink-900"
  | "bg-purple-900"
  | "bg-yellow-200"
  | "";
type Gradient =
  | "bg-gradient-to-r from-yellow-300 to-green-300"
  | "bg-gradient-to-r from-blue-300 to-purple-300"
  | "bg-gradient-to-r from-pink-300 to-yellow-300"
  | "bg-gradient-radial from-yellow-300 to-green-300"
  | "bg-gradient-radial from-blue-900 to-purple-300"
  | "bg-gradient-radial from-pink-900 to-yellow-300"
  | "";

const FrameFirst: React.FC = () => {
  const [solidColor, setSolidColor] = useState<Color>("");
  const [linearGradient, setLinearGradient] = useState<Gradient>("");
  const [radialGradient, setRadialGradient] = useState<Gradient>("");
  const [foregroundColor, setForegroundColor] = useState<Color>("bg-white");

  const handleSolidColorClick = (color: Color) => {
    setSolidColor(color);
    setLinearGradient("");
    setRadialGradient("");
  };

  const handleLinearGradientClick = (gradient: Gradient) => {
    setLinearGradient(gradient);
    setSolidColor("");
    setRadialGradient("");
  };

  const handleRadialGradientClick = (gradient: Gradient) => {
    setRadialGradient(gradient);
    setSolidColor("");
    setLinearGradient("");
  };

  const handleForegroundColorClick = (color: Color) => {
    setForegroundColor(color);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/8 bg-gray-100 p-4">
        <div className="text-xl font-bold mb-6">Logo Here</div>
        <nav className="space-y-4">
          <a href="#" className="block p-2 hover:bg-gray-200">
            Home
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Schedule
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Recommendation
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Analytics
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Profile
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Inbox{" "}
            <span className="ml-2 bg-blue-600 text-white rounded-full px-2">
              8
            </span>
          </a>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Themes
          </a>
        </nav>
        <div className="absolute bottom-4 left-4">
          <a href="#" className="block p-2 hover:bg-gray-200">
            Settings
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Themes</h1>
          <div className="flex items-center">
            <span className="mr-4">Kushagra Singh</span>
            <button className="p-4 bg-gray-300 rounded-full"></button>
          </div>
        </div>
        <div className="bg-white p-6 rounded">
          <div
            className="bg-slate-100 border-slate-50 rounded flex justify-between content-center"
            style={{ border: "1px solid black" }}
          >
            <div className="content-center">
              <h1 className="text-xl m-4">Apply a skin to your profile</h1>
            </div>
            <div className="content-center px-4">
              <button className="p-2 bg-gray-300 rounded">Custom</button>
              <button className="ml-4 p-2 bg-blue-600 text-white rounded">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="bg-white p-4 rounded shadow w-1/8">
            <div className="grid grid-rows-4 gap-1">
              {/* Solids */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Solids</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-8 h-8 bg-black cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-black")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-gray-300 border border-black cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-gray-300")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-yellow-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-yellow-300")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-green-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-green-900")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-blue-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-blue-900")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-pink-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-pink-900")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-purple-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-purple-900")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-yellow-200 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-yellow-200")}
                  ></div>
                </div>
              </div>

              {/* Linear Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Linear Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  {/* Add more linear gradient colors as needed */}
                </div>
              </div>

              {/* Radial Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Radial Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-radial from-pink-900 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleRadialGradientClick(
                        "bg-gradient-radial from-pink-900 to-yellow-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  {/* Add more radial gradient colors as needed */}
                </div>
              </div>

              {/* Foreground Color */}
              <div>
                <h3 className="font-semibold mb-2">Foreground Color</h3>
                <div className="flex gap-1">
                  <div
                    className="w-8 h-8 bg-black cursor-pointer"
                    onClick={() => handleForegroundColorClick("bg-black")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-white border border-black cursor-pointer"
                    onClick={() => handleForegroundColorClick("bg-white")}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 w-3/4">
            <div
              className={`bg-white p-4 rounded shadow ${solidColor} ${linearGradient} ${radialGradient}`}
            >
              <div
                className={`flex items-start mb-4 flex-col p-4 ${foregroundColor}`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ml-4">
                  <Image src={image} alt="Profile Picture" />
                </div>
                <div className="ml-4">
                <h1 className={`text-2xl font-bold ${foregroundColor}`}>
                    Mason Parker
                  </h1>
                  <p className={foregroundColor}>Graphics & UI/UX Designer</p>
                  <p className={foregroundColor}>Denver, United States</p>
                </div>
              </div>
              <div className="bg-white border-slate-800 p-4 w-3/4 border-dashed">
                <p>
                  I am a visionary Graphics and UI/UX Designer, seamlessly
                  blending artistic flair with technical expertise. With a
                  degree in Graphic Design, I consistently deliver visually
                  stunning and user-centric solutions, leaving an indelible mark
                  on the digital landscape. As a trusted collaborator, I am
                  dedicated to crafting pixel-perfect UIs and captivating
                  graphics that elevate user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameFirst;
