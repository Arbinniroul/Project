import Navbar from "@/components/common/Navbar";
import { Footer } from "@/components/logincomponents/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
   <div className="w-full">
    <Navbar/>
    <div className="py-12 bg-black text-white">
      <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-all">
        <h1 className="text-4xl font-extrabold mb-8 text-white">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-8">
          Have questions about ClimateGrow? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
            <Input 
              id="name" 
              placeholder="Your name" 
              className="bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-600" 
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
              className="bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-600" 
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
            <Textarea 
              id="message" 
              placeholder="How can we help?" 
              className="min-h-[150px] bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-600" 
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gray-700 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 rounded-xl py-3 text-lg transition-all">
            Send Message
          </Button>
        </form>
      </div>
    </div>
    <Footer/>
   </div>
  );
}
