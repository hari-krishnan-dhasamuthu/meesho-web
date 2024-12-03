import React from 'react'
import './Api.css';
import { NavLink, useNavigate } from 'react-router-dom';
const New = () => {

    return (



        <div className="container-fluid"  >
            <div style={{ marginLeft: "130px" }}>
                <img src="https://supplier.meesho.com/images/logo.svg" alt="" />
            </div>
            <div style={{ display: "flex", gap: "40px", marginTop: "5px" }}>
                <NavLink to="/p" className='cv' replace  >
                    <span style={{ fontSize: "15px" }}>Sell Online</span>
                </NavLink>

                <NavLink to="/about1" className='cv' >  <span style={{ fontSize: "15px" }}>How it Works</span> </NavLink>
                <span style={{ fontSize: "15px" }}>pricing & Commision</span>
                <span style={{ fontSize: "15px" }}>Shipping & Returns</span>
                <span style={{ fontSize: "15px" }}>Grow Business</span>
                <span style={{ fontSize: "15px" }}>Don't have GST?</span>
                <NavLink to="/lokl" >   <button style={{ width: "100px", height: "40px", border: "1px solid #f43397", backgroundColor: "white", borderRadius: "5%", color: "#f43397", marginTop: "-15px" }}>
                    Login
                </button> </NavLink>

                <button style={{ width: "100px", height: "40px", border: "1px solid #f43397", backgroundColor: "white", borderRadius: "5%", background: "#f43397", marginTop: "-15px" }}>Start Selling</button>
            </div>
        </div>
    )
}

export default New