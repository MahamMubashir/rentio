import { useState } from "react";
import card1 from "../assets/HouseListing1.png";
import card2 from "../assets/HouseListing2.png";
import card3 from "../assets/HouseListing3.png";
import card4 from "../assets/HouseListing4.png";
import card5 from "../assets/HouseListing5.png";
import card6 from "../assets/HouseListing6.png";

const initialProperties = [
  {
    id: 1,
    title: "Bratislava, Ružinov",
    address: "Narcisová 21, Bratislava II",
    price: "1,500 €",
    rooms: 2,
    baths: 1,
    area: "48 m²",
    image: card1,
    popular: true,
  },
  {
    id: 2,
    title: "Bratislava, Ružinov",
    address: "Narcisová 21, Bratislava II",
    price: "1,500 €",
    rooms: 2,
    baths: 1,
    area: "48 m²",
    image: card2,
    popular: true,
  },
  {
    id: 3,
    title: "Bratislava, Ružinov",
    address: "Narcisová 21, Bratislava II",
    price: "1,500 €",
    rooms: 2,
    baths: 1,
    area: "48 m²",
    image: card3,
    popular: true,
  },
  {
    id: 4,
    title: "Bratislava, Ružinov",
    address: "Narcisová 21, Bratislava II",
    price: "1,500 €",
    rooms: 2,
    baths: 1,
    area: "48 m²",
    image: card4,
  },
  {
    id: 5,
    title: "Bratislava, Ružinov",
    address: "Narcisová 21, Bratislava II",
    price: "1,500 €",
    rooms: 2,
    baths: 1,
    area: "48 m²",
    image: card5,
  },
  {
    id: 6,
    title: "Bratislava, Ružinov",
    address: "Narcisová 21, Bratislava II",
    price: "1,500 €",
    rooms: 2,
    baths: 1,
    area: "48 m²",
    image: card6,
  },
];

function HouseListing() {
  const [properties, setProperties] = useState(initialProperties);

  return (
    <>
      <div className="max-w-7xl mx-auto px-12 py-10">
        {/* Search Button */}
        <div className=" my-4 flex flex-row justify-between">
          {/* Heading */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Na základe vašej polohy
            </h2>
            <p className="text-center text-gray-600 ">
              Niektoré z našich vybraných nehnuteľností vo vašej blízkosti.
            </p>
          </div>

          <button className="p-4  bg-orange-400 text-white text-lg font-semibold rounded-md shadow-md hover:bg-orange-400">
            Prehľadávať nehnuteľnosti
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="border rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 space-y-4">
                {property.popular && (
                  <span className="bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
                    POPULÁRNY
                  </span>
                )}

                <p className="text-orange-400 font-semibold text-lg mt-2 flex flex-row justify-between items-center">
                  {property.price} /mesiac
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="23.25"
                      fill="white"
                      stroke="#FCDDA9"
                      stroke-width="1.5"
                    />
                    <path
                      d="M16.318 18.318C15.9001 18.7359 15.5687 19.2319 15.3425 19.7779C15.1164 20.3239 15 20.909 15 21.5C15 22.091 15.1164 22.6761 15.3425 23.2221C15.5687 23.7681 15.9001 24.2641 16.318 24.682L24 32.364L31.682 24.682C32.5259 23.8381 33 22.6935 33 21.5C33 20.3065 32.5259 19.1619 31.682 18.318C30.8381 17.4741 29.6935 17 28.5 17C27.3065 17 26.1619 17.4741 25.318 18.318L24 19.636L22.682 18.318C22.2641 17.9001 21.7681 17.5687 21.2221 17.3425C20.6761 17.1164 20.091 17 19.5 17C18.9091 17 18.3239 17.1164 17.7779 17.3425C17.232 17.5687 16.7359 17.9001 16.318 18.318V18.318Z"
                      stroke="#F6A105"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm">{property.address}</p>

                <div className="flex items-center text-gray-500 text-sm space-x-4 ">
                  <span className="flex flex-row">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4998 8.98317V6.6665C17.4998 5.2915 16.3748 4.1665 14.9998 4.1665H11.6665C11.0248 4.1665 10.4415 4.4165 9.99984 4.8165C9.55817 4.4165 8.97484 4.1665 8.33317 4.1665H4.99984C3.62484 4.1665 2.49984 5.2915 2.49984 6.6665V8.98317C1.9915 9.4415 1.6665 10.0998 1.6665 10.8332V15.8332H3.33317V14.1665H16.6665V15.8332H18.3332V10.8332C18.3332 10.0998 18.0082 9.4415 17.4998 8.98317ZM11.6665 5.83317H14.9998C15.4582 5.83317 15.8332 6.20817 15.8332 6.6665V8.33317H10.8332V6.6665C10.8332 6.20817 11.2082 5.83317 11.6665 5.83317ZM4.1665 6.6665C4.1665 6.20817 4.5415 5.83317 4.99984 5.83317H8.33317C8.7915 5.83317 9.1665 6.20817 9.1665 6.6665V8.33317H4.1665V6.6665ZM3.33317 12.4998V10.8332C3.33317 10.3748 3.70817 9.99984 4.1665 9.99984H15.8332C16.2915 9.99984 16.6665 10.3748 16.6665 10.8332V12.4998H3.33317Z"
                        fill="#F6A105"
                      />
                    </svg>

                    {property.rooms}
                  </span>
                  <span className="flex flex-row">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_1177)">
                        <path
                          d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z"
                          stroke="#F6A105"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 13.1714L6.36371 17.5351"
                          stroke="#F6A105"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.6362 17.5351L17.9999 13.1714"
                          stroke="#F6A105"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1177">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {property.baths}
                  </span>
                  <span className="flex flex-row">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4998 8.33333H5.83317V5.83333C5.83317 4.91417 6.58067 4.16667 7.49984 4.16667C8.419 4.16667 9.1665 4.91417 9.1665 5.83333H10.8332C10.8332 3.995 9.33817 2.5 7.49984 2.5C5.6615 2.5 4.1665 3.995 4.1665 5.83333V8.33333H2.49984C2.27882 8.33333 2.06686 8.42113 1.91058 8.57741C1.7543 8.73369 1.6665 8.94565 1.6665 9.16667V10.8333C1.6665 13.005 3.0615 14.8525 4.99984 15.5417V18.3333H6.6665V15.8333H13.3332V18.3333H14.9998V15.5417C16.9382 14.8525 18.3332 13.005 18.3332 10.8333V9.16667C18.3332 8.94565 18.2454 8.73369 18.0891 8.57741C17.9328 8.42113 17.7209 8.33333 17.4998 8.33333ZM16.6665 10.8333C16.6665 12.6717 15.1715 14.1667 13.3332 14.1667H6.6665C4.82817 14.1667 3.33317 12.6717 3.33317 10.8333V10H16.6665V10.8333Z"
                        fill="#F6A105"
                      />
                    </svg>
                    {property.area}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HouseListing;
