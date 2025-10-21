import React from "react";

const Starfield = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div id="stars-sm" className="absolute top-0 left-0 w-full h-full"></div>
      <div id="stars-md" className="absolute top-0 left-0 w-full h-full"></div>
      <div id="stars-lg" className="absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
};

export default Starfield;
