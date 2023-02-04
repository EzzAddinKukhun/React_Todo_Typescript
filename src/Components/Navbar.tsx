import React from "react";
import todo_logo from "../imgs/todo_logo.jpg";
import "../App.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="main-container">
          <div className="todoLogo">
            <img src={todo_logo}></img>
          </div>
          <div className="navs">
            <div>DASHBOARD</div>
            <div>SITES</div>
            <div>BILLING</div>
            <div>SUPPORT</div>
          </div>
          <div className="notification">
            <div><i className="fa-solid fa-bell"></i></div>
          </div>
        </div>
      </div>
    </>
  );
}
