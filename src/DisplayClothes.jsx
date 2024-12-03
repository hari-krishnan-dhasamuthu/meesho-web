import React from "react";

const DisplayClothes = () => {
    return (
        <div
            style={{
                backgroundColor: "rgb(237, 234, 255)",
                minHeight: "100vh",


            }}
        >
            <center>
                <div  >
                    <img
                        src="https://images.meeshosupplyassets.com/meesho-logo-pink.svg"
                        alt="Meesho Logo"
                    />
                </div>
                <br />
                <div className="jdh" style={{ width: "25rem" }}>
                    <div >
                        <br />
                        <p style={{ marginRight: "130px", fontSize: "20px" }}> Login to your supplier panel </p>

                        <input type="text" name="" id="" placeholder="Enter email id or mobile number" style={{ marginRight: "25px", width: "350px", height: "30px" }} />
                        <br /><br />
                        <input type="password" name="" id="" placeholder="Enter passward" style={{ marginRight: "25px", width: "350px", height: "30px" }} />
                    </div>
                </div>
            </center>
        </div>
    );
};

export default DisplayClothes;
