import React from "react";

function Community() {
  return (
    <div>
      <div class="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-8">
        {/* <div class="flex flex-wrap items-center justify-between mb-4 space-y-1">
          <h2 class="text-2xl font-semibold text-gray-900">Community Page</h2>
        </div>
        <hr />
        <div class="grid grid-cols-2 space-x-6 sm:space-x-0 sm:grid-cols-1 sm:w-1/6 py-6">
          <div class="p-4 card border bg-gray-100 shadow-md">
            <div class="flex items-start justify-center"></div>
            <p class="text-sm leading-none text-center text-gray-600">
              Total Students
            </p>
          </div>
          <div class="p-4 card bg-gray-100 border shadow-md my-auto sm:my-6">
            <div class="flex items-start justify-center"></div>
            <p class="text-sm leading-none text-center text-gray-600">
              Teachers
            </p>
          </div>
          <div class="p-4 card border bg-gray-100 shadow-md my-auto sm:my-auto">
            <div class="flex items-start justify-center"></div>
            <p class="text-sm leading-none text-center text-gray-600">
              Total Students
            </p>
          </div>
          <div class="p-4 card bg-gray-100 border shadow-md my-6 ">
            <div class="flex items-start justify-center"></div>
            <p class="text-sm leading-none text-center text-gray-600">
              Teachers
            </p>
          </div>
        </div> */}

        <div className="bg-indigo-400 w-full">
          <div className="container px-6 py-6 sm:py-0 mx-auto">
            <div className="sm:hidden bg-white w-full relative">
              <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-selector"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#A0AEC0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="8 9 12 5 16 9" />
                  <polyline points="16 15 12 19 8 15" />
                </svg>
              </div>
              <select
                aria-label="Selected tab"
                className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
              >
                <option selected className="text-sm text-gray-600">
                  Select Option{" "}
                </option>
                <option className="text-sm text-gray-600"> Finance Club</option>
                <option className="text-sm text-gray-600">
                  {" "}
                  Entrepreneur Club
                </option>
                <option className="text-sm text-gray-600">Code Club</option>
                <option className="text-sm text-gray-600"> Groups</option>
              </select>
            </div>
            <ul className="hidden sm:flex flex-row pt-8">
              <li className="rounded-t w-32 h-12 flex items-center justify-center bg-white text-sm text-gray-800">
                Finance Club
              </li>
              <li className="rounded-t w-40 h-12 flex items-center justify-center bg-gray-100 mx-3 text-sm text-gray-800">
                Entrepreneur Club
              </li>
              <li className="rounded-t w-32 h-12 flex items-center justify-center bg-gray-100 mr-3 text-sm text-gray-800">
                Code Club
              </li>
              <li className="rounded-t w-32 h-12 flex items-center justify-center bg-gray-100 text-sm text-gray-800">
                Groups
              </li>
            </ul>
          </div>
        </div>
        {/* Page title ends */}
        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="container mx-auto px-6 mt-10 h-80">
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {/* Place your content here */}
            <div className="py-64">
              <hr />
              <button className="my-2 float-right mr-3 hover:bg-gray-700 bg-indigo-400  shadow-sm shadow-gray-400  tracking-widest font-assistant  lg:text-sm md:text-sm text-sm rounded f-m-m font-semibold text-white focus:outline-none lg:px-6 px-6 lg:py-3 py-3 xl:leading-4">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
