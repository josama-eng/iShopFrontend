import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cart.slicer";
import { useDispatch } from "react-redux";

const ProductComponent = ({ name, info, price, img, id, product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newProduct = {
      id,
      count: 1,
      cartTotal: price,
      price,
      image: img,
      name,
    };
    dispatch(addToCart(newProduct));
  };

  return (
    <div className="text-white">
      <img src={`https://ishop-0956f618a0f9.herokuapp.com/${img}`} alt="" />
      <div className="py-5 text-center">
        <h3 className="text-rose text-3xl">{name}</h3>
        <p className="text-2xl py-2">{info}</p>
        <p>${price}</p>
        <button
          className="btn btn-outline my-3 text-rose hover:bg-rose hover:text-black"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
