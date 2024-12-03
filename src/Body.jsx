import React from "react"

const Body = () => {
    return (
        <div className="container">
            <div className="column left-column">
                <div>
                    <h1
                        style={{
                            fontSize: 50,
                            fontWeight: 400,
                            paddingLeft: 30,
                            gap: 10,
                            margin: 0
                        }}
                    >
                        Lowest Prices
                    </h1>
                </div>
                <div>
                    <p style={{ fontSize: 40, fontWeight: 400, paddingLeft: 30, margin: 0 }}>
                        Best Quality Shopping
                    </p>
                </div>
                <div className=" jks">
                    <div
                        style={{
                            backgroundColor: "white",
                            width: 120,
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <img
                            style={{ paddingLeft: 10, width: 30 }}
                            src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                            alt=""
                        />
                        <p
                            style={{
                                fontSize: 15,
                                paddingTop: "-100px",
                                margin: 0,
                                paddingLeft: 10
                            }}
                        >
                            Free <br />
                            Download
                        </p>
                    </div>
                    <div
                        style={{
                            backgroundColor: "white",
                            width: 120,
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <img
                            style={{ paddingLeft: 10, width: 30 }}
                            src="https://images.meesho.com/images/pow/cod_jamun.svg"
                            alt=""
                        />
                        <p
                            style={{
                                fontSize: 15,
                                paddingTop: "-100px",
                                margin: 0,
                                paddingLeft: 10
                            }}
                        >
                            Cash on <br />
                            Delivery
                        </p>
                    </div>
                    <div style={{ paddingTop: 20 }} className="vertical-line" />
                    <div
                        style={{
                            backgroundColor: "white",
                            width: 120,
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <img
                            style={{ paddingLeft: 10, width: 30 }}
                            src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                            alt=""
                        />
                        <p
                            style={{
                                fontSize: 15,
                                paddingTop: "-100px",
                                margin: 0,
                                paddingLeft: 10
                            }}
                        >
                            Easy <br />
                            Returns
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: "rgb(159, 32, 137)",
                        width: 300,
                        marginLeft: 30,
                        marginTop: 35,
                        display: "flex"
                    }}
                >
                    <img
                        style={{ marginLeft: 10, width: 20, height: 25, marginTop: 10 }}
                        src="https://images.meesho.com/images/pow/playstoreSmallIcon.png"
                        alt=""
                    />
                    <h1
                        style={{
                            fontSize: 20,
                            fontWeight: 100,
                            color: "white",
                            paddingLeft: 20
                        }}
                    >
                        Download the Meesho App
                    </h1>
                </div>
            </div>
            <div className="column right-column" >
                <img
                    src="https://images.meesho.com/images/marketing/1728882602080_512.webp"
                    alt="jj"
                />
            </div>
        </div>





    )
}

export default Body