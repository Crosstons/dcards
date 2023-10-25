import React from 'react'

function ManagScreen() {
    const pools = [
        { amount: "$1000", description: "lorem Ipsum" },
        { amount: "$1500", description: "lorem Ipsum" },
        { amount: "$2000", description: "lorem Ipsum" }
      ];

  return (
    <div>
  <h1 class="text-4xl font-semibold mt-8 font-sor tracking-tight leading-none md:text-5xl text-[#292524] text-center">List of Pools</h1>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">

        {
        pools.map((pool, index) => (
          <div key={index} class="p-4 lg:w-1/3">
            <div class="h-full bg-gradient-to-b from-emerald-600 to-emerald-800 bg-opacity-75 cursor-pointer hover:scale-105 transition-all duration-300 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 class="text-8xl font-medium font-sor text-gray-100 mb-3">{pool.amount}</h1>
              <p class="mb-3 text-gray-200 tracking-widest leading-10">{pool.description}</p>
            </div>
          </div>
        ))
        }

      </div>
      <div class="mt-8 flex justify-center">
        <button class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
          {/* Placeholder for the SVG. Replace with your SVG icon */}
          <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create
        </button>
      </div>
    </div>
  </section>
</div>

  )
}

export default ManagScreen