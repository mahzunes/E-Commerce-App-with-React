import React from "react";
import { Link } from "react-router-dom";
import { IoMdBasket } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { TbBrandProducthunt } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";

import "../index.css";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  if (user) {
    return (
      <div>
        <div className="header">
          <div className="headerTitle">OUZO</div>

          <div className="basketLink">
            <Link to="/basket">
              <IoMdBasket className="basketLinks"></IoMdBasket>
            </Link>
          </div>
          <div className="loginLink">
            <button onClick={handleLogout}>
              <BiLogOut className="loginLinks"></BiLogOut>
            </button>
          </div>
          
          <div className="productLink">
            <Link to="/product-list">
              <TbBrandProducthunt className="productLinks"></TbBrandProducthunt>
            </Link>
          </div>
          <div className="homeLink">
            <Link to="/">
              <AiFillHome className="homeLinks"></AiFillHome>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <span className="headerTitle">OUZO</span>

        <div className="loginLinktwo">
          <Link to="/login">
            <FiLogIn className="loginLinks"></FiLogIn>
          </Link>
        </div>

        <div className="productLinktwo">
          <Link to="/product-list">
            <TbBrandProducthunt className="productLinks"></TbBrandProducthunt>
          </Link>
        </div>
        <div className="homeLinktwo">
          <Link to="/">
            <AiFillHome className="homeLinks"></AiFillHome>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
