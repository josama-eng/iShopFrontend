import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProductComponent = ({ name, info, price, img, id }) => {
  return (
    <div className="text-white ">
      <img src={`http://localhost:5050/${img}`} alt="" />
      <div className="py-5">
        <h3 className="text-rose text-3xl">
          <Link to={`/details/${id}`}>{name}</Link>
        </h3>
        <p className="text-2xl py-2">{info}</p>
        <p>${price}</p>
        <Button title="Add to cart" />
      </div>
    </div>
  );
};

export default ProductComponent;
