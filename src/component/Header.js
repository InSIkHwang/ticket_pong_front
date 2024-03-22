import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h2>TicketPong</h2>
      <div className="content">
        <Link to="/">Home</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/login">Login</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/mypage">My Page</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/Community">커뮤니티</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/payment">결제</Link>
        <hr />
      </div>
    </>
  );
};

export default Header;
