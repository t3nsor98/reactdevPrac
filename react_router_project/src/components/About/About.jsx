import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* Image Section */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Tree Plantation"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl text-green-700 font-bold md:text-4xl">
              About Our Mission
            </h2>
            <p className="mt-6 text-gray-700">
              At <span className="font-bold text-green-700">Green Earth</span>,
              we are dedicated to creating a sustainable future by planting
              trees and raising awareness about the importance of preserving
              our planet. Trees are the lifeline of our ecosystem, providing
              oxygen, improving air quality, and supporting wildlife.
            </p>
            <p className="mt-4 text-gray-700">
              Our mission is to inspire individuals and communities to take
              action and make a difference. Together, we can combat climate
              change, restore biodiversity, and create a greener, healthier
              planet for future generations.
            </p>
            <p className="mt-4 text-gray-700">
              Join us in our journey to plant trees, spread awareness, and
              nurture the Earth. Every small step counts toward a brighter
              future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
