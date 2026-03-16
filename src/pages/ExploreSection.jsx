import React from "react";
import CategorySlider from "../components/CategorySlider";
import useGlobalReducer from "../hooks/useGlobalReducer";

function ExploreSection() {

    const { store, dispatch} = useGlobalReducer();

    return (
        <>
            <h1>Explore Section</h1>
            <CategorySlider />
        </>
    )
}

export default ExploreSection;