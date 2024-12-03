import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="header-container">
      <br />
      <div className="container" style={{ display: "flex" }}>
        <div className="image" style={{ width: 180 }}>
          <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="" />
        </div>
        <div className="label" style={{ marginLeft: "50px" }}>
          <i className="fa fa-search" aria-hidden="true" />
          <input
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
            style={{ width: 300, fontSize: 15, border: "none", outline: "none" }}
          />
        </div>
        <div className="new" style={{ marginLeft: "50px" }}>
          <i className="fa fa-mobile fa-2x" aria-hidden="true" />
          <p className="download-text">Download App</p>
          <br />
          <div className="download-menu" style={{ marginTop: "35px" }}>
            <p>Download From:</p>
            <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="Playstore" />
            <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="Appstore" />
          </div>
        </div>
        <div className="vertical-line" />
        <div className="nw2" style={{ marginLeft: 20, paddingTop: "20px" }}>
          <NavLink to="/about" className="cvb">  <p>Become a Supplier</p></NavLink>
        </div>
        <div className="vertical-line" />
        <div className="nw3" style={{ marginLeft: 20, paddingTop: "20px" }}>
          <NavLink to="/ani" className="cvb">  <p>Newroom</p></NavLink>
        </div>
        <div className="vertical-line" />
        <div className="profile">
          <i
            className="fa fa-user-o"
            aria-hidden="true"
            style={{ fontSize: 20, margin: 0 }}
          />
          <p className="download-t">Profile</p>
          <div className="download-m" >
            <p>Hello User <br /> <span style={{ fontSize: "10px", marginTop: "-50px" }}>To access your Meesho account</span></p>
            <NavLink to="/enter-phone"> <button style={{ backgroundColor: "rgb(159, 32, 137)", width: "100px", height: "40px", borderRadius: "7%" }} >Sign Up</button></NavLink>
            <hr />
            <p> <span><i className="fa fa-shopping-bag" aria-hidden="true"></i></span> My order</p>
            <hr />

            <p>Delete account</p>

          </div>
        </div>
        <div className="vertical-line" />
        <NavLink to="/enter-phone " style={{ textDecoration: "none" }}>
          <div className="login" style={{ marginLeft: 20, color: "black" }}>
            <i
              className="fa fa-shopping-cart"
              aria-hidden="true"
              style={{ paddingLeft: 5 }}
            />
            <p style={{ margin: 0 }}>Card</p>
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
