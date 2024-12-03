import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Noth = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 1:
                return <div> <div style={{ marginLeft: "200px", width: "1500px" }} className='zoom'>

                    <h1> Latest</h1>
                    <hr />
                    <div style={{ display: "flex", gap: "40px" }}>
                        <div>
                            <img style={{ width: "600px" }} src="https://admin.meesho.io/content/images/2023/10/resett.png" alt="" />
                        </div>
                        <div>
                            <h1 style={{ fontSize: "30px" }}>Meesho Continues to</h1>
                            <h1 style={{ fontSize: "30px" }}> to Invest in Employee</h1>
                            <h1 style={{ fontSize: "30px" }}> Wellness: Announces</h1>
                            <h1 style={{ fontSize: "30px" }}> Third Consecutive Company-Wide Reset</h1>
                            <h1 style={{ fontSize: "30px" }}> & Recharge Break</h1>
                            <br />

                            <h1 style={{ fontSize: "15px" }}>Pioneering a first for Indian startups, this <br /> initiative grants employees the opportunity to <br /> fully detach from work and prioritize their</h1>
                            <br />
                            <h1 style={{ fontSize: "15px" }}>Meesho</h1>
                            <h1 style={{ fontSize: "15px" }}>Oct 31st, 23 | 2 min read</h1>
                        </div>

                    </div>
                    <br />
                    <br /><br /><br />

                </div>
                    <div style={{
                        display: "flex", gap: "70px", paddingLeft: "200px"
                    }}>
                        <div className="card" style={{ width: "22rem", border: "none" }}>
                            <img src="https://admin.meesho.io/content/images/2023/10/V6.png" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ background: "black" }}>

                                <h5 className="card-text" style={{ color: "white" }}>
                                    Meesho Witnesses Record 1.6 <br /> Crore New App Installs During <br /> the Mega Blockbuster Sale,<br /> Categories like Footwear and <br /> Kidswear see ~120% Growth
                                </h5>
                                <p style={{ color: "white" }}>‘Meesho Mall’ witnessed 70% of orders coming  <br />from first-time Mall users</p>
                                <p style={{ color: "white" }}>Oct 17th, 23 | 2 min read</p>
                            </div>

                        </div>

                        <div className="card" style={{ width: "22rem", border: "none" }} >
                            <img src="https://admin.meesho.io/content/images/2023/10/cover-for-pre-festive-sales-record.png" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ background: "black" }}>
                                <h5 style={{ color: "white" }}>
                                    Meesho records nearly 1 crore <br /> orders during pre-festive sale  <br />events, expects over 3X growth during the upcoming festive <br /> season.
                                </h5>
                                <p style={{ color: "white" }}>Meesho records close to 1 crore orders in 4 <br /> sale days during its pre-festive sales, with  <br /> 75% of orders coming from tier 2 + markets</p>
                                <p style={{ color: "white" }}>Oct 5th, 23 | 2 min read</p>
                            </div>

                        </div>
                        <div className="card" style={{ width: "22rem", border: "none" }}>
                            <img src="https://admin.meesho.io/content/images/2023/10/non-gst-seller-registration.png" className="card-img-top" alt="..." />
                            <div className="card-body" style={{ background: "black" }}>
                                <h5 style={{ color: "white" }}>
                                    Meesho Makes Platform Non - <br />GST Inclusive, Enabling Millions <br /> of New Sellers to Come Online
                                </h5>
                                <p style={{ color: "white" }}>Unlocking Boundless Opportunities for Sellers <br /> Across Sectors and Geographical Regions</p>
                                <p style={{ color: "white" }}>Oct 3rd, 23 | 2 min read</p>
                            </div>

                        </div>


                    </div>
                    <br />
                    <br /><br /><br /><br /><br />
                    <div style={{ display: "flex", gap: "1000px" }}>
                        <div style={{ display: "flex", gap: "15px" }}>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            <img style={{ width: "50px" }} src="https://www.meesho.io/img/blog-icon.png" alt="" />
                        </div>
                        <div>
                            <p>Meesho | 2024 All Rights Reserved</p>
                        </div>
                    </div>
                </div >;
            case 2:
                return <div style={{ color: "white" }}>Content for 2023.</div>;
            case 3:
                return <div style={{ color: "white" }}>Content for 2022.</div>;
            case 4:
                return <div style={{ color: "white" }}>Content for 2021.</div>;
            default:
                return null;
        }
    };

    return (
        <div style={{ backgroundColor: "#000000" }}>
            {/* Header Section */}
            <div style={{ display: "flex" }}>
                <img
                    style={{ width: "50px", marginLeft: "20px", marginTop: "30px" }}
                    src="https://www.meesho.io/img/meesho-logo.png"
                    alt="Meesho logo"
                />
                <div style={{ marginLeft: "600px", display: "flex", gap: "60px", marginTop: "50px" }}>
                    <h6 style={{ color: "white" }}>Home</h6>
                    <h6 style={{ color: "white" }}>Teach at Meesho</h6>
                    <h6 style={{ color: "white" }}>Life at Meesho</h6>
                    <h6 style={{ color: "white" }}>Blog</h6>
                    <h6 style={{ color: "white" }}>Newsroom</h6>
                    <button style={{
                        backgroundColor: "rgb(255, 157, 0)",
                        borderRadius: "50px",
                        width: "100px",
                        height: "40px",
                        marginTop: "-5px"
                    }}>JOIN US</button>
                </div>
            </div>
            <br />

            <div style={{ display: "flex" }}>
                <div style={{ width: "700px", marginTop: "300px", paddingLeft: "100px" }}>
                    <h1 style={{ color: "rgba(255, 157, 0, 0.5)" }}>Latest updates &</h1>
                    <h1 style={{ color: "rgba(255, 157, 0.5)" }}>developments from</h1>
                    <h1 style={{ color: "rgba(255, 157, 0.5)" }}>Meesho's newsroom</h1>
                    <br /><br /><br />
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button style={{
                            backgroundColor: "#1da1f2",
                            borderRadius: "50px",
                            width: "100px",
                            height: "40px",
                            marginTop: "-5px"
                        }}>
                            <i className="fa fa-twitter" aria-hidden="true"></i> TWITTER
                        </button>
                        <button style={{
                            backgroundColor: "#d90368",
                            borderRadius: "50px",
                            width: "100px",
                            height: "40px",
                            marginTop: "-5px"
                        }}>
                            <i className="fa fa-download" aria-hidden="true"></i> PRESS KIT
                        </button>
                    </div>
                </div>
                <div>
                    <video autoPlay loop muted className="background-video">
                        <source src="https://www.meesho.io/img/news/news-banner.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            <div style={{ marginLeft: "100px", width: "1500px" }}>
                <p
                    style={{
                        fontSize: "20px",
                        paddingLeft: "20px",
                        cursor: "pointer",
                        backgroundColor: "rgba(59, 130, 246, .5)",
                        marginRight: "1300px",
                        marginLeft: "20px",
                        borderRadius: "10px"
                    }}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    Category
                    {!isOpen ? (
                        <AiOutlineCaretDown style={{ marginLeft: "50px" }} />
                    ) : (
                        <AiOutlineCaretUp style={{ marginLeft: "50px" }} />
                    )}
                </p>
                {isOpen && (
                    <div style={{
                        backgroundColor: "rgba(59, 130, 246, .5)",
                        marginTop: "-16px",
                        marginLeft: "20px",
                        marginRight: "1300px",
                        paddingLeft: "40px",
                        paddingTop: "20px"
                    }}>
                        <div>
                            <p style={{ paddingLeft: "20px", color: "white", cursor: "pointer" }} onClick={() => setActiveComponent(1)}>2024</p>
                            <p style={{ color: "white", paddingLeft: "20px", cursor: "pointer" }} onClick={() => setActiveComponent(2)}>2023</p>
                            <p style={{ color: "white", paddingLeft: "20px", cursor: "pointer" }} onClick={() => setActiveComponent(3)}>2022</p>
                            <p style={{ color: "white", paddingLeft: "20px", cursor: "pointer" }} onClick={() => setActiveComponent(4)}>2021</p>
                        </div>
                    </div>
                )}
                <hr />
            </div>

            <div style={{ paddingLeft: "20px", color: "white" }}>
                {renderActiveComponent()}
            </div>
        </div>
    );
};

export default Noth;
