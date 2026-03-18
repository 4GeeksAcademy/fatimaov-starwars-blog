import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function Card({ elementData, dataLabels, id }) {

    const labels = Object.values(dataLabels)
    const property = Object.keys(dataLabels)

    return (
        <>
            <div className="card" style={{ minWidth: 300 }}>
                <img src='' className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{elementData.name}</h5>
                    {labels.map((label, i) => {
                        return <p key={i}>{label} {elementData[property[i]]}</p>
                    })}
                    <Link className="btn btn-primary" to={`details/${id}`}>Learn More</Link>
                    <FavoriteButton />
                </div>
            </div>

        </>
    )
}

export default Card;