import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function Card({ elementData, dataLabels, id }) {

    const labels = Object.values(dataLabels)
    const property = Object.keys(dataLabels)

    return (
        <>
            <div className="card" style={{ minWidth: 400 }}>
                <div className="card-img-top d-flex align-items-center justify-content-center h2" style={{ minHeight: "200px", background: "lightgray", color: "grey" }} >
                    400 x 200
                </div>
                <div className="card-body">
                    <h5 className="card-title">{elementData.name}</h5>
                    {labels.map((label, i) => {
                        return <p key={i}>{label} {elementData[property[i]]}</p>
                    })}
                    <Link className="btn btn-outline-primary" to={`details/${id}`}>Learn More</Link>
                    <FavoriteButton />
                </div>
            </div>

        </>
    )
}

export default Card;