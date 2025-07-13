import React from "react";
import { eventHighlights } from "../constants";

const clickCTA = (text) => {
  console.log(`Clicked: ${text}`);
  // Add event tracking or navigation logic if needed
};

const Counts = () => {
  return (
    <div className="w-[90%]  mx-auto mb-8  px-0 md:w-[90%] lg:px-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl text-left md:text-center md:text-4xl font-bold text-primary mb-2 ">
          Event Highlights
        </h1>
        <p className="text-base text-left md:text-center md:text-lg text-secondary">
          Explore the highlights of the event
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* 16 Temples */}

        {/* With map */}
        {eventHighlights.map((event, index) => (
          <button
            key={index}
            className="relative flex flex-col bg-[#EAE2D5] text-primary rounded-xl md:rounded-2xl  hover:bg-[#ded5c5] overflow-hidden h-32 sm:h-40 md:h-48 lg:h-52"
            onClick={() => clickCTA("16 temples")}
          >
            {/* Text at top left */}
            <div className="text-left p-3 md:p-4 z-10 relative">
              <span className="text-3xl sm:text-4xl md:text-5xl  font-bold block">
                {event.count}
                <sup className="font-normal">{event.ifPlus}</sup>
              </span>
              <span className="text-secondary text-sm sm:text-base md:text-lg lg:text-xl tracking-wide">
                {event.title}
              </span>
            </div>

            {/* Image at bottom right */}
            <img
              src={event.image}
              alt="16 temples"
              className="w-[100px] sm:w-[160px]  object-contain absolute right-0 bottom-0 "
            />
          </button>
        ))}
        {/* With map */}
      </div>
    </div>
  );
};

export default Counts;
