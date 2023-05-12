import React from "react";

function Testimonials() {
  return (
    <div className="py-12">
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col items-center gap-4 md:gap-6">
            <h1 className="mx-auto text-center text-neutral-600 font-mono font-bold text-3xl">
              Testimonials
            </h1>

            <div class="max-w-md text-center text-gray-600 lg:text-lg">
              “This is a section of some simple filler text, also known as
              placeholder text.”
            </div>

            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                  loading="lazy"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                  John McCulling
                </div>
                <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  CEO / Datadrift
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container mx-auto max-w-6xl p-4">
        <h3 class="text-gray-800 py-6 text-3xl text-center font-bold">
          Popular Tweets
        </h3>
        <div class="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
          <div class="animate-in zoom-in duration-200">
            <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div class="flex flex-col break-inside-avoid-page z-0 relative">
                <div class="flex justify-between">
                  <div class="flex space-x-6">
                    <div class="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/51.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-semibold">Salvador Rose</div>
                        <div class="text-sm">@Salvador</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  target="_blank"
                  class="whitespace-pre-line break-inside-avoid-page"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </a>
              </div>
            </div>
          </div>

          <div class="animate-in zoom-in duration-200">
            <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div class="flex flex-col break-inside-avoid-page z-0 relative">
                <div class="flex justify-between">
                  <div class="flex space-x-6">
                    <div class="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/34.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-semibold">John doe</div>
                        <div class="text-sm">@John</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="@"
                  target="_blank"
                  class="whitespace-pre-line break-inside-avoid-page"
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="animate-in zoom-in duration-200">
            <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div class="flex flex-col break-inside-avoid-page z-0 relative">
                <div class="flex justify-between">
                  <div class="flex space-x-6">
                    <div class="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/78.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-semibold">Mike tyson</div>
                        <div class="text-sm">@mike</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href=""
                  target="_blank"
                  class="whitespace-pre-line break-inside-avoid-page"
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="animate-in zoom-in duration-200">
            <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div class="flex flex-col break-inside-avoid-page z-0 relative">
                <div class="flex justify-between">
                  <div class="flex space-x-6">
                    <div class="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/women/51.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-semibold">Sia</div>
                        <div class="text-sm">@Sia</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  target="_blank"
                  class="whitespace-pre-line break-inside-avoid-page"
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="animate-in zoom-in duration-200">
            <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div class="flex flex-col break-inside-avoid-page z-0 relative">
                <div class="flex justify-between">
                  <div class="flex space-x-6">
                    <div class="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/34.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-semibold">Cheung</div>
                        <div class="text-sm">@Cheung</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href=""
                  target="_blank"
                  class="whitespace-pre-line break-inside-avoid-page"
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="animate-in zoom-in duration-200">
            <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div class="flex flex-col break-inside-avoid-page z-0 relative">
                <div class="flex justify-between">
                  <div class="flex space-x-6">
                    <div class="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/women/8.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-semibold">Kendra</div>
                        <div class="text-sm">@Kendra</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  target="_blank"
                  class="whitespace-pre-line break-inside-avoid-page"
                >
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="animate-in zoom-in duration-200">
            <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div class="flex flex-col break-inside-avoid-page z-0 relative">
                <div class="flex justify-between">
                  <div class="flex space-x-6">
                    <div class="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-semibold">King</div>
                        <div class="text-sm">@king</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  target="_blank"
                  class="whitespace-pre-line break-inside-avoid-page"
                >
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="animate-in zoom-in duration-200">
            <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div class="flex flex-col break-inside-avoid-page z-0 relative">
                <div class="flex justify-between">
                  <div class="flex space-x-6">
                    <div class="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/50.jpg"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-semibold">Yoda</div>
                        <div class="text-sm">@yoda</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  target="_blank"
                  class="whitespace-pre-line break-inside-avoid-page"
                >
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Testimonials;
