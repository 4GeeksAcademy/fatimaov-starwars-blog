import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

function FavoriteButton( {element}) {

    const { store, dispatch } = useGlobalReducer();

    function handleClick() {
        dispatch({
            type: "ADD_FAVORITE",
            payload: {element: element},
        })
    }

    return (
        <>
            <button onClick={handleClick} className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
        </>
    )
}

export default FavoriteButton;