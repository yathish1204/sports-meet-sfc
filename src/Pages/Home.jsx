import React from "react";

import Sponsors from "../components/Sponsers";
import Rules from "../components/Rules";
import Counts from "../components/Counts";
import Location from "../components/Location";
import "./styles.css"; // Create this file for styling
import { Link } from "react-router-dom";
import Contacts from "../components/Contacts";
import EventDetails from "../components/EventDetails";
import { images } from "../constants";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      {/* Hero Section Redesigned */}
      <section className="relative pt-[2px] min-h-[80vh] flex items-center justify-center bg-[#F0F0F0] overflow-hidden">
        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-center px-4 py-4 max-w-7xl mx-auto">
          {/* Left Side - Charaka Image */}
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
            <img
              src={images.heroImg}
              alt="Charaka"
              className="max-w-xs md:max-w-md lg:max-w-lg h-auto drop-shadow-2xl"
            />
            {/* <Video /> */}
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col items-start md:items-start  md:text-left mb-6">
            <p className="text-2xl md:text-4xl font-semibold text-[#5A5A5A] mb-2">
              D.K. Jilla Padmashali Mahasabha&reg; Mangaluru
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A2A2A]  mb-3">
              33<sup>rd</sup> Padmashali Annual Sports Meet
            </h1>
            {/* <p className="text-[16px] md:text-[20px] text-[#5A5A5A] mb-2">
              Hosted by Sri Brahmalinga Veerabhadra Durgaparameshwari temple,
              Salikeri
            </p> */}
            <EventDetails />
            <div className="flex flex-row sm:flex-row gap-2 sm:gap-4 mt-4 w-full">
              <a
                href="/login"
                className="flex-1 sm:flex-initial px-8 py-3 rounded-lg text-center text-accent border-[1.5px] border-[#D35D38] font-medium text-md  hover:bg-[#e0e0e0]  transition"
              >
                Login
              </a>
              <a
                href="/register"
                className="flex-1 sm:flex-initial px-8 py-3 rounded-lg text-center bg-accent text-white font-medium text-md shadow-lg hover:bg-[#B84A2E] transition"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#F0F0F0]">
        <div>
          {" "}
          <Counts />
        </div>
        <div>
          <Sponsors />
        </div>
        <div>
          <Rules />
        </div>
        <div>
          <Location />
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default Home;
