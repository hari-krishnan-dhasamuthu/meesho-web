import React from "react";
import { useNavigate } from "react-router-dom";

const Body4 = () => {
    const handleImageClick = () => {

        window.open('/about', '_blank');
    };

    return (
        <div style={{ marginTop: "-150px" }} onClick={handleImageClick}>
            <div
                style={{
                    backgroundImage: "url(supplyBannerDesktop_1106.webp)",
                    backgroundColor: "black",
                    height: 300,
                    width: 1100,
                    marginLeft: 200,
                    marginTop: "-30px",
                }}
            >
                <h1 style={{ color: "white", marginLeft: "30px", paddingBottom: "20px" }}>
                    Register as a Meesho Supplier
                </h1>
                <p style={{ color: "white", marginLeft: "30px", paddingBottom: "20px" }}>
                    Sell your products to crores of customers at 0% commission
                </p>
                <div style={{ display: "flex", marginLeft: 40, gap: 20 }}>
                    <i style={{ paddingTop: "2px", color: "white" }} className="fa fa-check" aria-hidden="true" />
                    <h1 style={{ fontSize: "18px", fontWeight: 600, color: "white" }}>Grow your business 10x</h1>
                    <div style={{ backgroundColor: "white", width: 2, height: 30 }} />
                    <i style={{ paddingTop: 2, color: "white" }} className="fa fa-check" aria-hidden="true" />
                    <h1 style={{ fontSize: 16, fontWeight: 600, color: "white" }}>Enjoy 100% Profit</h1>
                    <div style={{ backgroundColor: "white", width: 2, height: 30 }} />
                    <i style={{ paddingTop: 2, color: "white" }} className="fa fa-check" aria-hidden="true" />
                    <h1 style={{ fontSize: 16, fontWeight: 600, color: "white" }}>Sell all over India</h1>
                    <div style={{ backgroundColor: "white", width: 2, height: 30 }} />
                </div>
                <button
                    style={{
                        marginTop: 30,
                        height: 60,
                        marginLeft: 60,
                        width: 130,
                        textAlign: "left",
                        fontSize: 18,
                        color: "rgb(159, 32, 137)",
                        paddingLeft: 20,
                        borderRadius: "5px"
                    }}
                >
                    Sign Up now
                </button>
            </div>
        </div>
    );
};

export default Body4;
