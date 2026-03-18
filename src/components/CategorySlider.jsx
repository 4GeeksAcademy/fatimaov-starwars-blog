import React from "react";
import Card from "./Card";

function CategorySlider({ type, dataLabels }) {

    return (
        <>
            <div className="d-flex overflow-x-scroll gap-4">
                {type.map((elementData) => {
                    return <Card
                        key={elementData.id}
                        elementData={elementData}
                        dataLabels={dataLabels}
                        id={elementData.id}
                    />
                })}
            </div>
        </>
    )
}

export default CategorySlider;