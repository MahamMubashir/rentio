import React from "react";
import background from "../assets/banner-bg.png";
import card1 from "../assets/banner-card1.png";
import card2 from "../assets/banner-card2.png";
import search from "../assets/banner-search.png";
import { useState } from "react";

const tabs = [
  {
    id: "prenajom",
    label: "Prenájom",
    location: "Bratislava",
    price: "1,200 €",
    buttonId: "hladat-prenajom",
  },
  {
    id: "spolubyvanie",
    label: "Spolubývanie",
    location: "Košice",
    price: "800 €",
    buttonId: "hladat-spolubyvanie",
  },
  {
    id: "predaj",
    label: "Predaj",
    location: "Žilina",
    price: "250,000 €",
    buttonId: "hladat-predaj",
  },
];
function Banner() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="relative">
      <div className="relative w-full h-[700px] flex flex-col lg:flex-row items-center justify-between bg-[#FAF8F6] p-6 lg:px-12">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 md:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Nájdite si bývanie <br /> jednoducho a rýchlo
          </h1>
          <p className="text-lg lg:text-2xl text-gray-600">
            Skvelá platforma kde si nájdete prenájom, spolubývanie <br />a to
            všetko bez poplatkov realitnej kancelárie.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-6 text-gray-900 text-xl md:grid-cols-2 md:text-2xl">
            <div>
              <span className="text-orange-400 text-2xl md:text-3xl font-bold">
                2,000+
              </span>
              <br />
              prenajímateľov
            </div>
            <div>
              <span className="text-orange-400 text-2xl md:text-3xl font-bold">
                10,000+
              </span>
              <br />
              ponúk
            </div>
          </div>

          {/* Navigation Tabs Image */}
          {/* <img src={search} alt="Navigation Tabs" className="w-full" /> */}
          <div className="mx-w-md lg:max-w-lg ">
            {/* Tabs */}
            <ul className="flex font-medium text-sm">
              {tabs.map((tab) => (
                <li key={tab.id} className=" bg-white rounded-t-lg">
                  <button
                    className={`p-4 rounded-t-lg ${
                      activeTab.id === tab.id
                        ? "text-orange-400 border-b-2 border-orange-400"
                        : "hover:border-orange-500"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Content */}
            <div className="p-4 bg-white shadow-md rounded-b-lg flex flex-row justify-around items-center">
              <p className=" flex flex-col">
                <span className="font-thin">Lokalita</span>
                <span className="font-semibold">{activeTab.location}</span>
              </p>
              <p className="font-medium flex flex-col">
                <span className="font-thin">Cena</span>
                <span className="font-semibold">{activeTab.price}</span>
              </p>
              <button
                id={activeTab.buttonId}
                className="px-4 py-2 bg-orange-400 text-white rounded-lg"
              >
                Hľadať {activeTab.label.toLowerCase()}
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Background Image + Floating Cards) */}
        <div className="relative w-full  lg:w-1/2 h-full">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/src/assets/banner-bg.png')]"></div>

          {/* Floating Cards */}
          <img
            src={card1}
            alt="Card 1"
            className="absolute bottom-10 right-8 lg:right-20 w-36 lg:w-48 rounded-lg"
          />
          <img
            src={card2}
            alt="Card 2"
            className="absolute w-56  top-10 left-8 lg:left-14 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
