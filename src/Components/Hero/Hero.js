import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

function Hero() {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <div class="mx-auto max-w-screen-2xl px-4 py-2 md:px-8">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          grabCursor={true}
          effect={"creative"}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          className="Swiper"
        >
          <SwiperSlide>
            <div class="hidden w-full overflow-hidden rounded border bg-gray-50 shadow-sm lg:block">
              <div class="mx-auto flex max-w-screen-xl items-center gap-8 p-16">
                <div class="grid w-2/3 grid-cols-2 gap-8">
                  <a href="!#" class="group flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
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
                      <div class="mb-1 font-semibold">Growth</div>
                      <p class="text-sm text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>
                    </div>
                  </a>

                  <a href="!#" class="group flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
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
                      <div class="mb-1 font-semibold">Security</div>
                      <p class="text-sm text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>
                    </div>
                  </a>

                  <a href="!#" class="group flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
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
                      <div class="mb-1 font-semibold">Cloud</div>
                      <p class="text-sm text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>
                    </div>
                  </a>

                  <a href="!#" class="group flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
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
                      <div class="mb-1 font-semibold">Analytics</div>
                      <p class="text-sm text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>
                    </div>
                  </a>
                </div>

                <div class="w-1/3 overflow-hidden rounded-lg border">
                  <div class="h-48 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320"
                      loading="lazy"
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div class="flex items-center justify-between gap-2 bg-white p-3">
                    <p class="text-sm text-gray-500">
                      This is some simple filler text.
                    </p>

                    <a
                      href="!#"
                      class="inline-block shrink-0 rounded-lg border bg-white px-3 py-1 text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-50 focus-visible:ring active:bg-gray-100"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="hidden w-full overflow-hidden rounded border bg-gradient-to-r from-cyan-300 to-blue-300 shadow-sm lg:block">
              <div class="mx-auto flex max-w-screen-xl items-center gap-8 p-16">
                <div class="grid w-2/3 grid-cols-2 gap-8">
                  <a href="!#" class="group flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
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
                      <div class="mb-1 font-semibold">Growth</div>
                      <p class="text-sm text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>
                    </div>
                  </a>

                  <a href="!#" class="group flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
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
                      <div class="mb-1 font-semibold">Security</div>
                      <p class="text-sm text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>
                    </div>
                  </a>

                  <a href="!#" class="group flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
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
                      <div class="mb-1 font-semibold">Cloud</div>
                      <p class="text-sm text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>
                    </div>
                  </a>

                  <a href="!#" class="group flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
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
                      <div class="mb-1 font-semibold">Analytics</div>
                      <p class="text-sm text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text.
                      </p>
                    </div>
                  </a>
                </div>

                <div class="w-1/3 overflow-hidden rounded-lg border">
                  <div class="h-48 bg-gray-100">
                    <img
                      src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1264479/retina_500x200_COVER-dcbcd112f1d502d97d7f2467c1ce21da.png"
                      loading="lazy"
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div class="flex items-center justify-between gap-2 bg-white p-3">
                    <p class="text-sm text-gray-500">
                      This is some simple filler text.
                    </p>

                    <a
                      href="!#"
                      class="inline-block shrink-0 rounded-lg border bg-white px-3 py-1 text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-50 focus-visible:ring active:bg-gray-100"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
