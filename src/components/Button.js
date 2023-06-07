import React from "react";

const Button = ({ title }) => {
  return (
    <button className="btn btn-outline my-3 text-rose hover:bg-rose hover:text-black">
      {title}
    </button>
  );
};

export default Button;
