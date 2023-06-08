import React from "react";
import hero from "../assets/images/hero.png";

const HeroComponent = () => {
  return (
    <div
      style={{
        background: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex flex-col justify-start align-center text-center"
    >
      <div className="pt-10 text-white">
        <h1 className=" text-6xl">iPhone XS and iPhone XS Max:</h1>
        <h2 className="text-4xl pt-4">Everything you need to know!</h2>
        <p className="text-1xl pt-4 text-slate-300">
          Looking to learn a little bit more about what's happening with the new
          iPhone XS <br /> and iPhone XS Max? We've got you covered!
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
