import React from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

function Details() {

    const { store, dispatch } = useGlobalReducer();
    const { type, id } = useParams();

    const elementData = store[type].find((element) => element.id === `${type}/${id}/`)

    return (

        <>
            <div className="m-5">
                <div className="d-flex align-items-center gap-5 my-4">
                    <div className="card-img-top d-flex align-items-center justify-content-center h2" style={{ minHeight: "200px", background: "lightgray", color: "grey" }} >
                        800 x 600
                    </div>
                    <div className="text-center">
                        <h2 className="fw-bold">{elementData.name}</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis architecto necessitatibus error deleniti corrupti obcaecati dolores quaerat iste accusantium perferendis laudantium ullam repellendus eveniet nulla a beatae, rerum ipsa? Quisquam!</p>
                    </div>
                </div>
                <div className="border-top border-danger">

                </div>
            </div>
        </>
    )
}

export default Details;