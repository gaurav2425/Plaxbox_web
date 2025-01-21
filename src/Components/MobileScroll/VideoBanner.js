import React, { useRef, useEffect } from "react";

const VideoBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Clean up function
    return () => {
      if (videoRef.current) {
        const video = videoRef.current;
        video.pause();
        video.src = "";
        video.load();
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      muted
      playsInline
      className="video-element"
    >
      <source src="/your-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBanner;
