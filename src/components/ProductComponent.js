// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "./Button";
// import { addToCart } from "../redux/cart.slicer";
// import { useDispatch } from "react-redux";

// const ProductComponent = ({ name, info, price, img, id, product, count }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="text-white ">
//       <img src={`http://localhost:5050/${img}`} alt="" />
//       <div className="py-5 text-center">
//         <h3 className="text-rose text-3xl">
//           <Link to={`/details/${id}`}>{name}</Link>
//         </h3>
//         <p className="text-2xl py-2">{info}</p>
//         <p>${price}</p>
//         <button
//           className="btn btn-outline my-3 text-rose hover:bg-rose hover:text-black"
//           onClick={() => handleAddToCart(product)}
//         >
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;

import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
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
      <img src={`http://localhost:5050/${img}`} alt="" />
      <div className="py-5 text-center">
        <h3 className="text-rose text-3xl">
          <Link to={`/details/${id}`}>{name}</Link>
        </h3>
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
