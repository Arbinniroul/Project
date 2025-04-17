import Navbar from "@/components/common/Navbar";
import { Footer } from "@/components/logincomponents/Footer";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";  // Add this import

const Solutions = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Crop Prediction",
      description:
        "Leverage AI-powered predictions to analyze climate data, soil conditions, and crop patterns, helping you make informed farming decisions.",
      image: "/images/crop-prediction.png", // Replace with an actual image
      link: "/predictions",
    },
    {
      id: 2,
      title: "Recommendations",
      description:
        "Get actionable recommendations for improving yields, optimizing resources, and mitigating potential risks based on real-time data.",
      image: "/images/recommendations.png", // Replace with an actual image
      link: "/recommendation",
    },
    {
      id: 3,
      title: "Offspring Techniques",
      description:
        "Explore modern offspring management techniques to ensure sustainable and high-quality yields for future generations.",
      image: "/images/offspring-techniques.png", // Replace with an actual image
      link: "/offspring",
    },
    {
      id: 4,
      title: "Health Problems Detections",
      description:
        "Explore modern offspring management techniques to ensure sustainable and high-quality yields for future generations.",
      image: "/images/offspring-techniques.png", // Replace with an actual image
      link: "/pestdetection",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-green-700">
          Our Solutions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering farmers with cutting-edge AI tools for better decision-making,
          improved yields, and sustainable practices.
        </p>
      </header>

      {/* Services Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-green-600">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <button
                  onClick={() => navigate(service.link)}
                  className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Outlet for Nested Routes */}
      <Outlet />

      <Footer />
    </div>
  );
};

export default Solutions;
