import React from 'react'

const New3eg = () => {
    return (
        <div style={{
            backgroundColor: "rgba(231, 238, 255, .4)", height: "250px", display: "flex"
        }} >
            <div style={{ marginLeft: "250px", marginTop: "50px" }}>
                <img src="https://supplier.meesho.com/images/learn-hub.svg" alt="" />
                <h1>Learn how to sell and grow</h1>
                <h1>your business on Meesho</h1>
            </div>
            <div style={{ paddingLeft: "300px", marginTop: "100px" }}>
                <button
                    style={{
                        width: "250px",
                        height: "70px",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        border: "2px solid #f43397",
                        cursor: "pointer"
                    }}
                    className='hk'>
                    <img src="https://supplier.meesho.com/images/play.svg" alt="" />
                    Visit Learning Hub
                </button>
            </div>

        </div>
    )
}

export default New3eg