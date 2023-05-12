import React, { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/categories/categories`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-4 py-2.5 md:px-8">
        <div class="hidden w-full overflow-hidden rounded border bg-white shadow-sm lg:block">
          <div class="mx-auto flex max-w-screen-2xl items-center gap-8 p-16">
            <div class="grid max-w-screen-2xl grid-cols-4 gap-12">
              {products.map((product, index) => (
                <a href="!#" class="group flex gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-300 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-16 md:w-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>

                  <div>
                    <div class="mb-1 font-semibold">{product.categoryName}</div>
                    <p class="text-sm text-gray-500">{product.description}</p>
                  </div>
                </a>
              ))}

              {/* <a href="!#" class="group flex gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-300 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-16 md:w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <div>
                  <div class="mb-1 font-semibold">App Development</div>
                  <p class="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                  </p>
                </div>
              </a>

              <a href="!#" class="group flex gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-300 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-16 md:w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>

                <div>
                  <div class="mb-1 font-semibold">Data Science</div>
                  <p class="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                  </p>
                </div>
              </a>

              <a href="!#" class="group flex gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-300 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-16 md:w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>

                <div>
                  <div class="mb-1 font-semibold">Artificial Intelligence</div>
                  <p class="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                  </p>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
