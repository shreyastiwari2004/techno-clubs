import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";
import heroImage from "../assets/hero-image.png";
import feature1 from "../assets/feature-1.png";
import feature2 from "../assets/feature-2.png";
import feature3 from "../assets/feature-3.png";
import feature4 from "../assets/feature-4.png";

const Home = () => {
  const navigate = useNavigate(); // ✅ Ensure this is inside the component

  return (
    <div className="bg-[rgba(16,4,37,1)] text-white min-h-screen">
      <Navbar />
      <div className="flex">
        <section className="text-left py-36 px-20">
          <h1 className="text-3.5xl md:text-5xl font-bold">
            Revolutionizing <span className="text-blue-400 animate-pulse">Student Clubs</span> <br /> with Smart <span className="text-blue-400 animate-pulse">Automation</span>
          </h1>
          <p className="mt-4 text-2xl text-gray-400">Seamlessly manage events, credits & resources</p>

          <div className="mt-6 space-x-4">
            <button className="bg-blue-500 px-6 font-bold py-3 rounded-lg hover:bg-blue-700">Get Started</button>
            <button className="bg-pink-500 px-6 font-bold py-3 rounded-lg hover:bg-pink-700" onClick={() => navigate("/login")}>
              Explore Now
            </button>
          </div>

          {/* Corrected navigate usage */}
          <button
            className="mt-4 px-6 py-3 border font-bold border-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900"
            onClick={() => navigate("/login")}
          >
            Join The Revolution Now
          </button>
        </section>

        <div className="flex justify-end mt-2">
          <img src={heroImage} alt="Tech Illustration" className="rounded-lg shadow-lg w-auto h-full ml-28 max-w-lg" />
        </div>
      </div>

      <section className="px-6 md:px-20 py-16 bg-[rgba(16,4,37,1)]">
        <h2 className="text-3xl font-bold text-center mb-8 max-w-md">Features</h2>

        <div className="grid md:grid-cols-1 gap-6 justify-left">
          <Feature image={feature1} title="Unified Membership Hub" desc="One Profile, Multiple Clubs" tag="Manage memberships across chapters with ease." />
          <Feature image={feature2} title="AI-Driven Credit System" desc="Track, Earn, Get Rewarded." tag="AI-powered contribution tracking & rewards." />
          <Feature image={feature3} title="Event Lifecycle Automation" desc="Plan Smart, Execute Faster" tag="Automate event creation, RSVPs, and analytics." />
          <Feature image={feature4} title="Secured Resources" desc="Your Club’s Data, Secured" tag="Controlled access to club assets & reports." />
        </div>
      </section>
    </div>
  );
};

export default Home;
