import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function Card({elementData}) {
    const { name, gender, skinColor, hairColor, eyeColor, height, birthYear, id } = elementData

    return (

        <>
            <div className="card" style={{ minWidth: "18rem" }}>
                <img src='' className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Hair-color: {hairColor}</p>
                    <p className="card-text">Eye-color: {eyeColor}</p>
                    <Link className="btn btn-primary" to={'/details/id'}>Learn More</Link>
                    <FavoriteButton />
                </div>
            </div>

        </>
    )
}

export default Card;