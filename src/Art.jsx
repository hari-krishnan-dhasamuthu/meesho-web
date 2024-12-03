import React from "react";
import Inpu1 from "./Inpu1";

const Art = ({ handlechange }) => {
    return (
        <div style={{ marginLeft: "20px" }}>
            <div style={{ paddingRight: "200px", width: "500px" }}>
                <Inpu1
                    handlechange={handlechange}
                    value="blue"
                    title="Sneakers"
                    name="newPrice"
                />
                <Inpu1
                    handlechange={handlechange}
                    value="black"
                    title="Sandals"
                    name="cloths"
                />
            </div>
        </div>
    );
};

export default Art;
