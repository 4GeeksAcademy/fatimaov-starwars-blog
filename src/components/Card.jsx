import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function Card() {

    return (

        <>
            <p>Card</p>
            <Link to={'/details/id'}>details</Link>
            <FavoriteButton />
        </>
    )
}

export default Card;