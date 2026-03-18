import React from "react";
import Card from "./Card";
import useGlobalReducer from "../hooks/useGlobalReducer";

function CategorySlider({type, dataLabels}) {


    return (
        <>
            <div className="d-flex overflow-x-scroll gap-4">
                { type.map((element) => {
                    return <Card key={element.id} elementData={element} dataLabels={dataLabels}/>
                })}
            </div>
        </>
    )
}

export default CategorySlider;