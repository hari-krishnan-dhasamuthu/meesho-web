import React, { useState } from "react";
import Products from "./Data";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";


const Body6 = () => {
    const [Candidates, setCandidates] = useState(null);
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleChange = (event) => {
        const { value, checked } = event.target;
        setCandidates(checked ? value : null);
    };

    const filterItems = Products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    function filldata(products, selected, query) {
        let fill = products;

        if (query) {
            fill = filterItems;
        }

        if (selected) {
            fill = fill.filter(({ category, color, company, newPrice, title }) =>
                category === selected ||
                color === selected ||
                company === selected ||
                newPrice === selected ||
                title === selected
            );
        }

        return fill.map(({ img, title, reviews, newPrice, prevPrice }) => (
            <Card
                key={Math.random()}
                img={img}
                title={title}
                reviews={reviews}
                newPrice={newPrice}
                prevPrice={prevPrice}
            />
        ));
    }

    const result = filldata(Products, Candidates, query);
    const [isopen, setisopen] = useState(false);
    return (

        <div style={{ display: "flex" }}>
            <div className="card" style={{
                width: "18rem",
                marginLeft: "40px",
                height: "500px",

            }} >

                <h1>FILTERS</h1>
                <span>1000+ Products</span>
                <hr />
                <div >
                    <p style={{ fontSize: "20px", paddingLeft: "20px" }} onClick={() => setisopen((prev) => !prev)}>category

                        {!isopen ? (
                            <AiOutlineCaretDown style={{ marginLeft: "140px" }} />
                        ) : (
                            <AiOutlineCaretUp style={{ marginLeft: "140px" }} />
                        )
                        }

                    </p>
                    {isopen && (
                        <Sidebar handlechange={handleChange} />
                    )}
                    <hr />

                </div>
            </div>
            <div className="card1" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginLeft: "10px", width: "calc(100% - 240px)" }}>
                {result}
            </div>

        </div>
    );
};

export default Body6;
