import React, { useEffect, useState } from "react";
import axios from "axios";

function Topics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/topics/topic`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <section class="px-8 py-4 mx-auto max-w-screen-2xl">
        <div class="flex flex-wrap items-center justify-between mb-4 space-y-1">
          <h2 class="text-2xl font-semibold text-gray-900">
            Topics Recommended For You
          </h2>
        </div>
        <div class="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div class="p-4 card border bg-gray-50 shadow-md shadow-blue-200">
              <div class="flex items-start justify-center">
                <h2 class="mb-2 text-xl font-semibold text-gray-900 tracking-wider">
                  {product.topics}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Topics;
