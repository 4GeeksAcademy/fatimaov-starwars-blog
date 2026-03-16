import React from "react";
import Card from "./Card";

function CategorySlider({ type }) {


    return (
        <>
            <div className="d-flex overflow-x-scroll gap-4">
                { type.map((element) => {
                    return <Card key={element.id} elementData = {element} />
                })}
            </div>
        </>
    )
}

export default CategorySlider;