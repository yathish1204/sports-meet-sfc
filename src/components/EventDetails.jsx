import React from "react";
import { images } from "../constants";

const EventDetails = () => {
  return (
    <div className="card px-[1rem] py-6 rounded-xl bg-tertiary position-relative mt-4 mb-2">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <img
            className="flex-shrink-0"
            src={images.dateIcon}
            alt="calender"
            width={24}
          />
          <span className="text-primary">23-12-2025</span>
        </div>
        <div className="flex gap-2">
          <img
            className="flex-shrink-0"
            src={images.locationIcon}
            alt="Location"
            width={24}
          />
          <span className="text-primary">
            Sri Brahmalinga Veerabhadra Durgaparameshwari temple, Salikeri{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
