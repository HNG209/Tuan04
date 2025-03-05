import React from "react";
import "../components/card-style.css"; // Import the CSS file

const Card = ({ value }) => {

    return (
        <div className="card">
            <img
                src={value.strMealThumb}
                alt="Italian-style tomato salad"
                className="card-image"
            />
            <div className="card-content">
                <h3 className="card-title">{value.strMeal}</h3>
                <div className="card-footer">
                    <span className="time-label">14 minutes</span>
                    <button className="bookmark-btn">♡</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
