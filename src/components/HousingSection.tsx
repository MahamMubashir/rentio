import logo from "../assets/divSection.png";
import newLogo from "../assets/divSection-mobile.png";
import { useState } from "react";

const tabs = [
  {
    label: "Prenájom",
    heading: "Nájdite si bývanie svojich snov",
    content:
      "Či už ide o prenájom alebo spolubývanie u nás ho nájdete rýchlo a jednoducho. A tá najlepšia časť? našimi službami ušetríte mnoho peňazí a času.",
    buttonId: "hladat-prenajom",
  },
  {
    label: "Spolubývanie",
    heading: "Nájdite si bývanie svojich snov",
    content:
      "Či už ide o prenájom alebo spolubývanie u nás ho nájdete rýchlo a jednoducho. A tá najlepšia časť? našimi službami ušetríte mnoho peňazí a času.",
    buttonId: "hladat-spolubyvanie",
  },
];
function HousingSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6  bg-white lg:px-12">
        {/* Left Section - Image with Floating Cards */}
        <div className="relative w-full lg:w-1/2 mb-6 lg:mb-0">
          {/* Main Image */}
          <img
            src={logo}
            alt="Housing"
            className="w-full rounded-xl lg:block hidden "
          />
        </div>
        {/* <div className="relative w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={newLogo}
            alt="Housing"
            className="w-full rounded-xl block  lg:hidden"
          />
        </div> */}

        {/* Right Section - Text & Navigation */}
        <div className="w-full lg:w-1/2 space-y-6 px-6 lg:px-12">
          {/* Navigation Tabs */}
          <div className="p-2 flex border bg-gray-100 rounded-xl overflow-hidden w-max">
            {/* <button className="px-4 py-2 text-sm font-semibold text-white bg-orange-400 rounded-l-lg">
              Nájomníci
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-r-lg">
              Prenajímatelia
            </button> */}
            {tabs.map((tab) => (
              <button
                className={`p-4 rounded-lg ${
                  activeTab.label === tab.label
                    ? "text-orange-400  bg-white"
                    : "hover:border-orange-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Heading & Description */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {activeTab.heading}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-lg">
            {activeTab.content}
          </p>

          {/* CTA Button */}
          <button className="px-6 py-3 text-base sm:text-lg lg:text-lg font-semibold text-white bg-orange-400 rounded-lg shadow-md hover:bg-orange-600">
            {activeTab.buttonId}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HousingSection;
