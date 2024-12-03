import React from 'react'
import New from './New'
import './Api.css';
import New2e from './New2.1';
import New2f from './New2.2';
import New2g from './New2.3';
import New3e from './New3.1';
import New3de from './New3.2';
import New3eg from './New3.3';
import New3fv from './New3.4';
import New3bn from './New3.5';
import New3mn from './New3.6';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const New2 = () => {
    useEffect(() => {
        document.title = 'My New Website Title';
    }, []);
    return (
        <div >
            <div >
                <New />

            </div>
            <hr />
            <div style={{ marginTop: "100px", height: "450px", backgroundColor: "#f43397" }}>

                <div style={{ height: "500px", position: "relative" }}>

                    <strong style={{ fontSize: "40px", marginLeft: "150px" }}>Sell online to 14 Cr+ customers at</strong>
                    <br />
                    <strong style={{ fontSize: "40px", marginLeft: "150px", color: " #f43397" }}>0% Commission</strong>
                    <br />
                    <br />
                    <span style={{ marginLeft: "150px" }}>Become a Meesho seller and grow your business across India</span>
                    <br />
                    <br />
                    <div style={{ display: "flex" }}>
                        <img style={{ width: "50px", fontSize: "40px", marginLeft: "150px" }} src="https://supplier.meesho.com/images/new-flicker.gif" alt="" />
                        <span style={{ marginLeft: "10px" }}>Don't have a GSTIN or have a Composition GSTIN?</span>
                        <br />

                    </div>
                    <div style={{ marginLeft: "150px" }}>
                        <span >You can still sell on Meesho. Click </span>
                        <span style={{ color: "#f43397" }}>here</span>
                        <span> to know more.</span>
                    </div>
                    <div style={{ marginLeft: "150px", marginTop: "40px", marginRight: "900px", height: "45px", border: "2px solid whitesmoke", display: "flex", borderRadius: "5px" }}>
                        <h6 style={{ marginLeft: "30px", marginTop: "9px" }}>91+</h6>

                        <input style={{ width: "200px", marginLeft: "20px", marginBottom: "5px", border: "none", outline: "none" }} type="tel" placeholder='Enter Your Moible Number' />
                        <button style={{ marginLeft: "90px", backgroundColor: " #f43397" }}>Start Selling</button>


                    </div>
                    <img style={{ width: "450px", height: "350px", marginLeft: "1000px", marginTop: "-200px" }} src="https://supplier.meesho.com/images/Desktop-Pic.png" alt="" />

                </div>
                <hr />


            </div>
            <br />
            <br />
            <br />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "5px", marginLeft: "150px", marginTop: "100px" }}>
                <div style={{ backgroundColor: "#f6f7f9", borderRadius: "10px", paddingLeft: "20px", height: "180px", paddingTop: "25px", width: "300px" }}>
                    <h4 style={{ color: "#f43397" }}>11 Lakh +</h4>
                    <br />
                    <h3>
                        Trust Meesho to sell
                    </h3>
                    <h3>
                        online
                    </h3>
                </div>

                <div style={{ backgroundColor: "#f6f7f9", borderRadius: "10px", paddingLeft: "20px", height: "180px", paddingTop: "25px", width: "300px" }}>
                    <h4 style={{ color: "#f43397" }}>14 Lakh +</h4>
                    <br />
                    <h3>
                        Customers buying
                    </h3>
                    <h3>
                        across India
                    </h3>
                </div>
                <div style={{ backgroundColor: "#f6f7f9", borderRadius: "10px", paddingLeft: "20px", height: "180px", paddingTop: "25px", width: "300px" }}>
                    <h4 style={{ color: "#f43397" }}>19000 +</h4>
                    <br />
                    <h3>
                        Pincode Supported
                    </h3>
                    <h3>
                        for delivery
                    </h3>
                </div>
                <div style={{ backgroundColor: "#f6f7f9", borderRadius: "10px", paddingLeft: "20px", height: "180px", paddingTop: "25px", width: "300px" }}>
                    <h4 style={{ color: "#f43397" }}>700 +</h4>
                    <br />
                    <h3 >
                        Categories to sell
                    </h3>
                    <h3>
                        online
                    </h3>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div style={{ display: "flex", marginLeft: "150px" }}>
                <div style={{ marginTop: "250px" }}>
                    <strong style={{ fontSize: "30px" }}>Why Suppliers Love Meesho</strong>
                    <br />
                    <br />
                    <span>All the benefits that come with selling on Meesho are</span>
                    <br />
                    <span>designed to help you sell more, and make it easier to grow</span>
                    <br />
                    <span>your business.</span>
                </div>
                <div>
                    <div className="card" style={{ width: "40rem", paddingLeft: "20px", marginLeft: "150px" }}>
                        <br />
                        <br />
                        <div>
                            <img style={{ width: "40px" }} src="https://supplier.meesho.com/images/icon-10.svg" alt="" />
                            <span>
                                0% Commission Fee
                            </span>
                            <br />
                            <br />

                            <span style={{ marginLeft: "40px", fontSize: "15px" }}>Suppliers selling on Meesho keep 100% of their profit by not paying</span>
                            <br />
                            <span style={{ marginLeft: "40px", fontSize: "15px" }}>any commission</span>
                            <hr />
                            <img style={{ width: "40px" }} src="https://supplier.meesho.com/images/icon-16.svg" alt="" />
                            <span>
                                0 Penalty Charges
                            </span>
                            <br />
                            <br />

                            <span style={{ marginLeft: "40px", fontSize: "15px" }}>Sell online without the fear of order cancellation charges with 0</span>
                            <br />
                            <span style={{ marginLeft: "40px", fontSize: "15px" }}>Penalty for late dispatch or order cancellations.</span>
                            <hr />
                            <img style={{ width: "40px" }} src="https://supplier.meesho.com/images/icon-11.svg" alt="" />
                            <span>
                                Growth for Every Supplier
                            </span>
                            <br />
                            <br />

                            <span style={{ marginLeft: "40px", fontSize: "15px" }}>From small to large and unbranded to branded, and now open for</span>
                            <br />
                            <span style={{ marginLeft: "40px", fontSize: "15px" }}>Sellers who don't have a Regular GSTIN too, Meesho fuels growth</span>
                            <br />
                            <span style={{ marginLeft: "40px", fontSize: "15px" }}>for all suppliers.</span>
                            <hr />
                            <img style={{ width: "40px" }} src="https://supplier.meesho.com/images/icon-12.svg" alt="" />
                            <span>
                                Ease of Doing Business

                            </span>
                            <br />
                            <span style={{ marginLeft: "40px", fontSize: "15px" }}> <img src="https://supplier.meesho.com/images/tick.svg" alt="" /> Easy Product Listing</span>
                            <span> <img src="https://supplier.meesho.com/images/tick.svg" alt="" /> Lowest Cost Shipping</span>
                            <br />
                            <span style={{ marginLeft: "40px", fontSize: "15px" }}> <img src="https://supplier.meesho.com/images/tick.svg" alt="" /> 7-Day Payment Cycle from the delivery date</span>

                        </div>
                    </div>

                </div>
            </div>
            <div style={{ backgroundColor: "rgba(231, 238, 255, .4)", marginTop: "200px", height: "300px", paddingLeft: "120px", paddingTop: "50px", display: "flex" }}>
                <div>
                    <strong style={{ fontSize: "30px" }}>
                        Exclusive Supplier+ Rewards</strong>
                    <br />
                    <strong style={{ fontSize: "30px" }}>for the first 30 days</strong>
                </div>
                <div className="card" style={{ width: "18rem", marginTop: "-100px", paddingLeft: "22px", borderRadius: "20px", paddingTop: "20px", marginLeft: "120px" }}>
                    <img style={{ width: "50px" }} src="https://supplier.meesho.com/images/icon-1.svg" alt="" />
                    <h1 style={{ fontSize: "20px" }}>Free catalog visibility of</h1>
                    <h1>₹600</h1>
                    <span style={{ fontSize: "15px" }}>Run advertisements for your</span>

                    <span style={{ fontSize: "15px" }}>catalogs to increase the visibility</span>

                    <span style={{ fontSize: "15px" }}>of your products and get more</span>

                    <span style={{ fontSize: "15px" }}>orders. Currently, not available for</span>

                    <span style={{ fontSize: "15px" }}>sellers who don't have a Regular</span>

                    <span style={{ fontSize: "15px" }}>GSTIN.</span>

                </div>
                <div className="card" style={{ width: "18rem", marginLeft: "50px", borderRadius: "20px", paddingTop: "20px", paddingLeft: "20px" }}>
                    <img style={{ width: "50px" }} src="https://supplier.meesho.com/images/icon-7.svg" alt="" />
                    <h1 style={{ fontSize: "25px" }}>No Order Cancellation</h1>
                    <h1 style={{ fontSize: "25px" }}>Charges

                    </h1>
                    <br />
                    <span>Cancel orders that you can’t fulfil</span>
                    <span>for unforeseen reasons without</span>
                    <span>worrying about penalties</span>

                </div>

            </div>
            <br />
            <br />
            <center>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>Experiences suppliers love to talk about</span>
            </center>
            <br />
            <br />
            <div style={{ display: "flex" }}>
                <New2e />
                <New2f />
                <New2g />
            </div>
            <br />
            <br />
            <center>
                <h1>How its work</h1>
            </center>
            <br />
            <br />
            <div style={{ backgroundColor: "rgba(231, 238, 255, .4)", marginLeft: "150px", marginRight: "150px" }}>

                <New3e />
            </div>
            <br />
            <br />
            <div>
                <New3eg />

            </div>
            <br />
            <br />
            <br />
            <br /><br />
            <div>
                <New3fv />
            </div>
            <br />
            <br />
            <div>
                <New3bn />
            </div>
            <br />
            <br />
            <div style={{
                backgroundColor: "rgba(231, 238, 255, .4)", height: "300px"
            }} >
                < New3de />
            </div>
            <br />
            <br />
            <div>
                <New3mn />

            </div>


        </div>






    )
}

export default New2