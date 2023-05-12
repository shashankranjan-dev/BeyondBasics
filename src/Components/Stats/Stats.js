import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <div>
      <section class="px-8 py-4 mx-auto max-w-screen-2xl">
        <div class="flex flex-wrap items-center justify-between mb-4 space-y-1">
          <h2 class="text-2xl font-semibold text-gray-900">
            Analytics Overview
          </h2>

          {/* <label>
            <span class="sr-only">Select date range</span>
            <select class="form-select form-select-sm">
              <option>Last 7 days</option>
              <option>Blue</option>
            </select>
          </label> */}
        </div>
        <div class="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div class="p-4 card border bg-gray-100 shadow-md">
            <div class="flex items-start justify-center">
              <h2 class="mb-2 font-mono text-2xl font-bold leading-none text-gray-900 truncate">
                <CountUp start={0} end={550} duration={5} />
              </h2>
            </div>
            <p class="text-sm leading-none text-center text-gray-600">
              Total Students
            </p>
          </div>
          <div class="p-4 card bg-gray-100 border shadow-md">
            <div class="flex items-start justify-center">
              <h2 class="mb-2 font-mono text-2xl font-bold leading-none text-gray-900 truncate">
                <CountUp start={0} end={70} duration={5} />
              </h2>
            </div>
            <p class="text-sm leading-none text-center text-gray-600">
              Teachers
            </p>
          </div>
          <div class="p-4 card bg-gray-100 border shadow-md">
            <div class="flex items-start justify-center">
              <h2 class="mb-2 font-mono text-2xl font-bold leading-none text-gray-900 truncate">
                <CountUp start={0} end={1220} duration={5} />
              </h2>
            </div>
            <p class="text-sm leading-none text-center text-gray-600">
              Activities
            </p>
          </div>
          <div class="p-4 card bg-gray-100 border shadow-md">
            <div class="flex items-start justify-center">
              <h2 class="mb-2 font-mono text-2xl font-bold leading-none text-gray-900 truncate">
                <CountUp start={0} end={5550} duration={5} />
              </h2>
            </div>
            <p class="text-sm text-center leading-none text-gray-600">
              Active Students
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
