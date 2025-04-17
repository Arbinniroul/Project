import Navbar from "@/components/common/Navbar";
import DetectionResults from "@/components/logincomponents/DetectionResults";
import ImageUpload from "@/components/logincomponents/ImageUpload";
import Recommendations from "@/components/logincomponents/Recommendations";
import WaterManagement from "@/components/logincomponents/WaterMangement";

import React from "react";

const HealthProblems = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <Navbar/>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-blue-700 mb-8">
          Health Problems Detection & Recommendations
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Upload an image, get instant detection results, actionable
          recommendations, and manage water usage effectively.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Upload Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Upload an Image
            </h2>
            <ImageUpload />
          </div>

          {/* Detection Results Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Detection Results
            </h2>
            <DetectionResults />
          </div>

          {/* Recommendations Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Recommendations
            </h2>
            <Recommendations />
          </div>

          {/* Water Management Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Water Management
            </h2>
            <WaterManagement />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthProblems;
