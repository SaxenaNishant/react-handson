import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo2.png";
import "./Header.css";

export default function Home() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App bar </div>
      </Link>
      <div className="user-image" style={{ backgroundColor: "black" }}>
        <img src={logoImage} alt="user" />
      </div>
    </div>
  );
}
