import React, { useEffect, useRef } from "react";
import { images } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Video = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    window.addEventListener("DOMContentLoaded", () => {
      video.addEventListener("loadedmetadata", () => {
        const duration = video.duration;

        gsap.to(video, {
          currentTime: duration,
          ease: "none",
          scrollTrigger: {
            trigger: video,
            start: "top 63px",
            end: "bottom top",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
      });
    });
  }, []);

  return (
    <div className="h-[50vh] w-[100%] md:h-[80vh]">
      <video
        ref={videoRef}
        id="video"
        className="position-position-absolute top-0 bottom-0 w-[100%] h-[100%] md:h-[80vh-80px] object-fit-cover"
        muted
      >
        <source src={images.carVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
