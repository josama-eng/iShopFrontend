import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { setPrice, deleteFromCart } from "../redux/cart.slicer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const [redirectUrl, setRedirectUrl] = useState("");
  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();
  const cartTotal = useSelector((store) => store.cart.totalPrice);
  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    if (user === null) {
      setRedirectUrl("/login");
      toast.info("Please login or register before checkout", {
        toastId: "login-info",
      });
    } else {
      setRedirectUrl("/checkout");
    }
  }, [user]);

  return (
    <div className="overflow-x-auto w-full h-screen">
      <table className="table">
        <thead>
          <tr className="text-white text-customTextSize">
            <th>Name</th>
            <th>Image</th>
            <th>Count</th>
            <th>Price</th>
            <th>SubTotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index} className="text-white text-standardTextSize">
                <td>{item.name}</td>
                <td>
                  <img
                    src={`https://ishop-0956f618a0f9.herokuapp.com/${item.image}`}
                    className="w-tableImgW"
                    alt=""
                  />
                </td>
                <td>
                  <div className="flex gap-5">
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(setPrice({ increment: 1, index }))
                      }
                    >
                      <FaChevronUp />
                    </span>
                    {item.count}
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(setPrice({ increment: -1, index }))
                      }
                    >
                      <FaChevronDown />
                    </span>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>${item.cartTotal}</td>
                <td>
                  <button
                    onClick={() => dispatch(deleteFromCart({ id: item.id }))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-col items-center justify-center gap-9">
        <h3 className="pt-5 text-white">Cart total: ${cartTotal}</h3>
        <Link to={redirectUrl} className="btn glass text-white">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartComponent;
