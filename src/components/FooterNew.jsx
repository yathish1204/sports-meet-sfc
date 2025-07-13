import React from "react";
import InstagramButton from "./InstagramButton";
import { images } from "../constants";

const FooterNew = () => {
  return (
    <footer className="bg-[#FCFCFC] z-20 w-[90%] mx-auto">
      {/* <div className="flex flex-col md:flex-row items-center  justify-between w-[90%] mx-auto py-4 md:p-6 gap-4 md:gap-0"> */}
      <div className="flex  items-center justify-between md:gap-2  items-center  py-4 ">
        <div className="flex flex-row items-center gap-2 text-sm text-start md:text-base">
          <img src={images.SFC_logo} alt="logo" width={40} />
          <div
            className="flex flex-col"
            onClick={`https://www.instagram.com/friends_club_salikeri/`}
          >
            <p>Designed by</p>
            <a
              className="hover:text-[#D35D38] "
              href="https://www.instagram.com/friends_club_salikeri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Friends Club Salikeri</strong>
            </a>
          </div>
        </div>
        <div className="flex text-[#2A2A2A]">
          <div>
            <a
              href="https://www.instagram.com/friends_club_salikeri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramButton />
            </a>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-[#aaa]"></div>
      <div className="pt-5 pb-8">
        <p className="text-xs text-center text-[#5a5a5a]">
          &copy; 2025 Shettigar Sports Summit. All Rights Reserved
        </p>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default FooterNew;
