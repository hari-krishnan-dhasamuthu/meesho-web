import React from "react";

const Card = ({ img, title, newPrice, reviews, prevPrice }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={title} style={{ height: "120px" }} />
            <hr />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p style={{ width: "200px" }}>
                    Price: {newPrice} {prevPrice && <span style={{ textDecoration: "line-through" }}>{prevPrice}</span>}
                </p>
                <span>Free Delivery</span>
                <button>
                    {reviews}
                </button>
            </div>
        </div>
    );
};

export default Card;
