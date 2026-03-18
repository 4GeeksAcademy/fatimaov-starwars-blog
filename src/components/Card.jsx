import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function Card({ elementData, dataLabels, id }) {
    

    const labels = Object.values(dataLabels)
    const property = Object.keys(dataLabels)

    return (
        <>
            <div className="card border-0" style={{ minWidth: 400 }}>
                <div className="card-img-top d-flex align-items-center justify-content-center h2 m-0" style={{ minHeight: "200px", background: "lightgray", color: "grey" }} >
                    400 x 200
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{elementData.name}</h5>
                    <div className="mb-3">
                        {labels.map((label, i) => {
                            return <p className="m-0" key={i}>{label} {elementData[property[i]]}</p>
                        })}
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link className="btn btn-outline-primary m-0" to={`details/${id}`}>Learn More!</Link>
                        <FavoriteButton element={elementData.name} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;