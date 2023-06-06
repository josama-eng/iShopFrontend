import React from "react";
import hero from "../assets/images/hero2.png";

const SpecComponent = () => {
  return (
    <div
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex justify-end items-center px-10"
    >
      <div className="text-base-300 w-custom text-end">
        <h2 className="text-customSize pb-2 text-ivory">
          What's the difference between the iPhone XS and iPhone XS Max?
        </h2>
        <p>
          iPhone XS has a 5.8-inch OLED display and the iPhone XS Max has a
          6.5-inch OLED display, meaning the iPhone Xs Max is larger; however,
          other than that, there is no difference between the two new phones on
          the inside.
        </p>
      </div>
    </div>
  );
};

export default SpecComponent;
