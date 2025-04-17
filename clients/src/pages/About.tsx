import Navbar from "@/components/common/Navbar"
import { Footer } from "@/components/logincomponents/Footer";

export default function About() {
  return (
    <div className="w-full">
      <Navbar/>
<div className=" py-12 bg-black text-white px-12">
      <h1 className="text-4xl font-extrabold mb-8 text-white">About ClimateGrow</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none text-white">
        <p className="text-xl text-muted-foreground mb-8">
          ClimateGrow is an AI-powered platform dedicated to understanding and predicting the impact of climate change on agricultural productivity in Nepal. By using data science and machine learning, we aim to provide actionable insights for farmers to adapt to changing climatic conditions and ensure sustainable agricultural practices.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transition-all">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p className="text-lg text-gray-300">
              To empower farmers, policymakers, and researchers with data-driven insights for sustainable agriculture in a changing climate. We aim to provide solutions that bridge the gap between technology and agriculture, enhancing food security and resilience.
            </p>
          </div>
          
          <div className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transition-all">
            <h2 className="text-2xl font-semibold text-white">Our Approach</h2>
            <p className="text-lg text-gray-300">
              We combine advanced AI models with local agricultural knowledge to provide accurate crop yield predictions and adaptation strategies. By analyzing environmental variables like temperature, rainfall, and soil health, we offer personalized insights for each region of Nepal.
            </p>
          </div>
          
          <div className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transition-all">
            <h2 className="text-2xl font-semibold text-white">Our Impact</h2>
            <p className="text-lg text-gray-300">
              Supporting Nepalese farming communities in making informed decisions about crop selection, irrigation practices, and pest management. Through our platform, we help farmers increase yields, reduce losses, and improve sustainability for future generations.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-6">Why ClimateGrow Matters</h2>
          <p className="text-lg text-gray-300 mb-4">
            Agriculture in Nepal is increasingly vulnerable to the unpredictable nature of climate change. From prolonged droughts to unpredictable rainfall patterns, farmers are struggling to make the right decisions. ClimateGrow offers a data-driven approach to combat these challenges, ensuring farmers can predict climate variations and adapt their practices for maximum yield.
          </p>
          <p className="text-lg text-gray-300">
            By empowering local agricultural communities with actionable insights, we can mitigate the risks associated with climate change and build a resilient future for Nepal’s farming sector.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold  text-white mb-6">Join Us in Building a Sustainable Future</h2>
          <p className="text-lg text-gray-300">
            As part of our mission to foster global sustainability, we invite farmers, researchers, and policymakers to join us in our journey. Together, we can drive change by leveraging technology to make agriculture more efficient, resilient, and sustainable.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
}
