import Image from "../assets/RealEstateFeature4.png"; // Adjust the path accordingly

function RealEstateFeature() {
  return (
    <div className="bg-gray-50 py-12 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-orange-300 p-8 rounded-xl">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Nový spôsob, ako nájsť svoj nový domov
          </h2>
          <p className="text-gray-600 mt-4">
            Nájdite si svoje vysnívané miesto na bývanie s viac ako 10 000
            nehnuteľnosťami v ponuke.
          </p>

          {/* Stats Section */}
          <div className="flex mt-6 gap-6">
            {/* Item 1 */}
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 65 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32.5" cy="32" r="31.5" stroke="#FAD79D" />
                  <circle cx="32.5" cy="32" r="28" fill="#FAD79D" />
                  <g clip-path="url(#clip0_1_1437)">
                    <path
                      d="M44.1167 26.5094L35.2283 19.6024C34.4483 18.9962 33.4882 18.667 32.5 18.667C31.5117 18.667 30.5517 18.9962 29.7717 19.6024L20.8817 26.5094C20.3474 26.9245 19.9151 27.456 19.6179 28.0635C19.3207 28.671 19.1663 29.3383 19.1667 30.0145V42.0034C19.1667 42.8866 19.5178 43.7337 20.143 44.3582C20.7681 44.9828 21.6159 45.3337 22.5 45.3337H42.5C43.384 45.3337 44.2319 44.9828 44.857 44.3582C45.4821 43.7337 45.8333 42.8866 45.8333 42.0034V30.0145C45.8333 28.6441 45.2 27.3503 44.1167 26.5094Z"
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    d="M27.5 37L37.5 27"
                    stroke="#F6A105"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.3333 28.6667C28.7936 28.6667 29.1667 28.2936 29.1667 27.8333C29.1667 27.3731 28.7936 27 28.3333 27C27.8731 27 27.5 27.3731 27.5 27.8333C27.5 28.2936 27.8731 28.6667 28.3333 28.6667Z"
                    fill="#F6A105"
                    stroke="#F6A105"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M36.6663 36.9997C37.1266 36.9997 37.4997 36.6266 37.4997 36.1663C37.4997 35.7061 37.1266 35.333 36.6663 35.333C36.2061 35.333 35.833 35.7061 35.833 36.1663C35.833 36.6266 36.2061 36.9997 36.6663 36.9997Z"
                    fill="#F6A105"
                    stroke="#F6A105"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="40.5"
                    y="40"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#F6A105"
                  />
                  <path
                    d="M46.1 52.8C46.1 52.5879 46.1843 52.3844 46.3343 52.2343C46.4843 52.0843 46.6878 52 46.9 52H48.5C48.7122 52 48.9157 52.0843 49.0657 52.2343C49.2157 52.3844 49.3 52.5879 49.3 52.8V56.8C49.3 57.0122 49.2157 57.2157 49.0657 57.3657C48.9157 57.5157 48.7122 57.6 48.5 57.6H46.9C46.6878 57.6 46.4843 57.5157 46.3343 57.3657C46.1843 57.2157 46.1 57.0122 46.1 56.8V52.8ZM50.9 49.6C50.9 49.3879 50.9843 49.1844 51.1343 49.0343C51.2843 48.8843 51.4878 48.8 51.7 48.8H53.3C53.5122 48.8 53.7157 48.8843 53.8657 49.0343C54.0157 49.1844 54.1 49.3879 54.1 49.6V56.8C54.1 57.0122 54.0157 57.2157 53.8657 57.3657C53.7157 57.5157 53.5122 57.6 53.3 57.6H51.7C51.4878 57.6 51.2843 57.5157 51.1343 57.3657C50.9843 57.2157 50.9 57.0122 50.9 56.8V49.6ZM55.7 47.2C55.7 46.9879 55.7843 46.7844 55.9343 46.6343C56.0843 46.4843 56.2878 46.4 56.5 46.4H58.1C58.3122 46.4 58.5157 46.4843 58.6657 46.6343C58.8157 46.7844 58.9 46.9879 58.9 47.2V56.8C58.9 57.0122 58.8157 57.2157 58.6657 57.3657C58.5157 57.5157 58.3122 57.6 58.1 57.6H56.5C56.2878 57.6 56.0843 57.5157 55.9343 57.3657C55.7843 57.2157 55.7 57.0122 55.7 56.8V47.2Z"
                    fill="white"
                  />
                  <defs>
                    <clipPath id="clip0_1_1437">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(16.5 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">7.4%</p>
                <p className="text-gray-600 text-sm">
                  Ušetríte s našimi cenami
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 65 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32.5" cy="32" r="31.5" stroke="#FAD79D" />
                  <circle cx="32.5" cy="32" r="28" fill="#FAD79D" />
                  <path
                    d="M36.5 45.3333H28.5C21.8333 45.3333 19.1667 42.6666 19.1667 36V28C19.1667 21.3333 21.8333 18.6666 28.5 18.6666H36.5C43.1667 18.6666 45.8333 21.3333 45.8333 28V36C45.8333 42.6666 43.1667 45.3333 36.5 45.3333Z"
                    fill="white"
                  />
                  <path
                    d="M28.0625 35.1065C28.0625 36.8265 29.3825 38.2132 31.0225 38.2132H34.3692C35.7958 38.2132 36.9558 36.9998 36.9558 35.5065C36.9558 33.8798 36.2492 33.3065 35.1958 32.9332L29.8225 31.0665C28.7692 30.6932 28.0625 30.1198 28.0625 28.4932C28.0625 26.9998 29.2225 25.7865 30.6492 25.7865H33.9958C35.6358 25.7865 36.9558 27.1732 36.9558 28.8932"
                    stroke="#F6A105"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.5 24V40"
                    stroke="#F6A105"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="40.5"
                    y="40"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#F6A105"
                  />
                  <g clip-path="url(#clip0_1_1469)">
                    <path
                      d="M47.8333 52L51.1667 55.3333L57.8333 48.6666"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1469">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(44.5 44)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3,856</p>
                <p className="text-gray-600 text-sm">
                  Nehnuteľnosti v prenájme
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="31.5" stroke="#FAD79D" />
                  <circle cx="32" cy="32" r="28" fill="#FAD79D" />
                  <rect
                    x="33.6499"
                    y="25"
                    width="2"
                    height="10"
                    fill="#F6A105"
                  />
                  <rect x="22" y="32" width="2" height="10" fill="#F6A105" />
                  <rect x="39" y="25" width="2" height="10" fill="#F6A105" />
                  <path
                    d="M22.6667 26.6666C20.4533 26.6666 18.6667 28.4533 18.6667 30.6666V41.3333C18.6667 43.5466 20.4533 45.3333 22.6667 45.3333H24.6667C26.1333 45.3333 27.3333 44.1333 27.3333 42.6666V29.3333C27.3333 27.8666 26.1333 26.6666 24.6667 26.6666H22.6667ZM24 38.6666C24 39.2133 23.5467 39.6666 23 39.6666C22.4533 39.6666 22 39.2133 22 38.6666V33.3333C22 32.7866 22.4533 32.3333 23 32.3333C23.5467 32.3333 24 32.7866 24 33.3333V38.6666Z"
                    fill="white"
                  />
                  <path
                    d="M41.3333 18.6666H33.3333C31.12 18.6666 29.3333 20.4533 29.3333 22.6666V41.3333C29.3333 43.5466 31.12 45.3333 33.3333 45.3333H34C34.3733 45.3333 34.6667 45.04 34.6667 44.6666V40C34.6667 39.2666 35.2667 38.6666 36 38.6666H38.6667C39.4 38.6666 40 39.2666 40 40V44.6666C40 45.04 40.2933 45.3333 40.6667 45.3333H41.3333C43.5467 45.3333 45.3333 43.5466 45.3333 41.3333V22.6666C45.3333 20.4533 43.5467 18.6666 41.3333 18.6666ZM35.6667 33.3333C35.6667 33.88 35.2133 34.3333 34.6667 34.3333C34.12 34.3333 33.6667 33.88 33.6667 33.3333V26.6666C33.6667 26.12 34.12 25.6666 34.6667 25.6666C35.2133 25.6666 35.6667 26.12 35.6667 26.6666V33.3333ZM41 33.3333C41 33.88 40.5467 34.3333 40 34.3333C39.4533 34.3333 39 33.88 39 33.3333V26.6666C39 26.12 39.4533 25.6666 40 25.6666C40.5467 25.6666 41 26.12 41 26.6666V33.3333Z"
                    fill="white"
                  />
                  <rect
                    x="40"
                    y="40"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#F6A105"
                  />
                  <path
                    d="M51.6667 58C55.1645 58 58 55.1645 58 51.6667C58 48.1689 55.1645 45.3334 51.6667 45.3334C48.1689 45.3334 45.3333 48.1689 45.3333 51.6667C45.3333 55.1645 48.1689 58 51.6667 58Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M58.6667 58.6667L57.3333 57.3334"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">321</p>
                <p className="text-gray-600 text-sm">
                  Priemerne ušetrených eur
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Real Estate Illustration"
            className="max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default RealEstateFeature;
