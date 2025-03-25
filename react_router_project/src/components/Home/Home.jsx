import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-4 sm:py-16 py-10 bg-gradient-to-r from-green-700 to-green-500">
        <div className="relative z-10 max-w-screen-xl px-6 sm:px-12 mx-auto flex flex-col sm:flex-row items-center sm:items-start">
          <div className="max-w-xl space-y-6 text-center sm:text-left">
            <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
              Plant a Tree, Save the Planet
            </h2>
            <p className="text-lg text-gray-200">
              Trees are the lungs of the Earth. Join us in our mission to plant
              trees and create a greener, healthier planet for future
              generations.
            </p>
            <Link
              className="inline-flex items-center px-6 py-3 font-medium bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg"
              to="/get-involved"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Get Involved
            </Link>
          </div>
          <div className="mt-10 sm:mt-0 sm:ml-10">
            <img
              className="w-80 sm:w-[400px] rounded-lg shadow-lg"
              src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Tree Plantation"
            />
          </div>
        </div>
      </aside>

      {/* Section with Image */}
      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="sm:w-96 w-64 rounded-lg shadow-lg"
          src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Plant Trees"
        />
      </div>

      {/* Call to Action */}
      <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold text-green-700">
        Together, We Can Make a Difference
      </h1>

      {/* Info Section */}
      <div className="grid sm:grid-cols-2 gap-8 px-6 sm:px-16 py-10">
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Why Plant Trees"
          />
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Why Plant Trees?
          </h3>
          <p className="text-gray-700">
            Trees provide oxygen, improve air quality, conserve water, preserve
            soil, and support wildlife. Planting trees is one of the simplest
            and most effective ways to combat climate change.
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            src="https://images.pexels.com/photos/53435/tree-oak-landscape-view-53435.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="How You Can Help"
          />
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            How You Can Help
          </h3>
          <p className="text-gray-700">
            Join our tree plantation drives, donate to support our mission, or
            volunteer to spread awareness. Every small step counts toward a
            greener future.
          </p>
        </div>
      </div>
    </div>
  );
}