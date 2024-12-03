import React from 'react';
import { NavLink } from 'react-router-dom';

const EnterPhone = () => {
    return (
        <div>
            <header className='fic' style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <div className="container" style={{ display: "flex", marginTop: "10px" }}>
                    <div className="image" style={{ width: 180 }}>
                        <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="Meesho Logo" />
                    </div>
                    <div className="label" style={{ marginLeft: "50px" }}>
                        <i className="fa fa-search" aria-hidden="true" />
                        <input
                            type="text"
                            placeholder="Try Saree, Kurti or Search by Product Code"
                            style={{ width: 300, fontSize: 15, border: "none", outline: "none" }}
                            aria-label="Search Products"
                        />
                    </div>
                    <div className="new" style={{ marginLeft: "200px" }}>
                        <i className="fa fa-mobile fa-2x" aria-hidden="true" />
                        <p className="download-text">Download App</p>
                        <br />
                        <div className="download-menu" style={{ marginTop: "35px" }}>
                            <p>Download From:</p>
                            <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="Download from Playstore" />
                            <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="Download from Appstore" />
                        </div>
                    </div>
                    <div className="vertical-line" />
                    <div className="nw2" style={{ marginLeft: 20, paddingTop: "20px" }}>
                        <NavLink to="/about" className="cvb">
                            <p>Become a Supplier</p>
                        </NavLink>
                    </div>
                    <div className="vertical-line" />
                    <div className="nw3" style={{ marginLeft: 20, paddingTop: "20px" }}>
                        <p>Newsroom</p>
                    </div>
                </div>
                <hr />
            </header>

            <div style={{
                background: "linear-gradient(rgb(253, 233, 242) 0%, rgb(253, 240, 232) 100%)",
                width: "100%",
                paddingTop: "80px",
                overflowY: "scroll",


            }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="card" style={{ width: "30rem", height: "1000px" }}>
                        <img style={{ height: "250px" }} src="https://images.meesho.com/images/marketing/1661417516766.webp" className="card-img-top" alt="Signup Illustration" />
                        <div className="card-body">
                            <br />
                            <span style={{ color: "rgb(53, 53, 67)", fontFamily: "Miner Bolt", fontWeight: "700", fontStyle: "normal", lineHeight: "28px" }}>Sign Up to view your profile</span>
                            <br />
                            <label htmlFor="phone-number" style={{ marginTop: "10px", display: "block" }}>Country</label>
                            <br />
                            <br />
                            <br />
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <h6 style={{ marginLeft: "20px" }}>🇮🇳 +91  <br /> </h6>


                                <input
                                    id="phone-number"
                                    style={{ border: "none", marginLeft: "50px", outline: "none" }}
                                    type="tel"
                                    placeholder='Phone Number'
                                    aria-label="Phone Number"
                                    required

                                />



                            </span>

                            <div style={{ display: "flex" }}>
                                <div className='hari-line' ></div>

                                <div className='hari-line' style={{
                                    width: "120px"
                                }} ></div>

                            </div>
                            <br />
                            <br />
                            <center>
                                <div style={{ justifyContent: "center" }}>
                                    <button style={{ backgroundColor: "rgb(159, 32, 137)", color: "white", width: "270px", height: "50px", borderRadius: "5%" }}>Continue</button>
                                </div>


                            </center>
                            <br />
                            <br />
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br />
                            <center>
                                By continuing, you agree to Meesho’s
                                <br />
                                Terms & Conditions and  Privacy Policy


                            </center>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default EnterPhone;
