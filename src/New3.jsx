import React from 'react'
import New from './New'
import New3e from './New3.1'
import New3de from './New3.2'
import New3mn from './New3.6'

const New3 = () => {
    return (
        <div>
            <div >
                <New />

            </div>
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
            </div>
            <br />
            <br />
            <center>
                <h1>Become a seller on Meesho in simple steps</h1>
            </center>
            <br />
            <br />
            <div>
                <New3e />
            </div>
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

export default New3