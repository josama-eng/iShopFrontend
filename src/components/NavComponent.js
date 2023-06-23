import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../services/user.service";
import { useSelector } from "react-redux";

const NavComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const cartCount = useSelector((store) => store.cart.totalCount);
  const totalPrice = useSelector((store) => store.cart.totalPrice);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        isScrolled ? "bg-white text-black" : "bg-black text-white"
      } sticky top-0 transition-colors duration-500 z-10`}
    >
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl  hover:bg-black-text-white"
        >
          iShop
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{cartCount}</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body bg-white text-black rounded-box">
              <span className="font-bold text-lg">{cartCount} Items</span>
              <span className="text-info">Subtotal: ${totalPrice}</span>
              <div className="card-actions">
                <Link to="/cart" className="btn glass">
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt="avatar"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-black"
          >
            <li>
              <Link to="/register" className="justify-between">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <button onClick={() => logoutUser()}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
