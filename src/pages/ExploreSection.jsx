import React, { useEffect } from "react";
import CategorySlider from "../components/CategorySlider";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getCharacters } from "../apiService";

function ExploreSection() {

    const { store, dispatch} = useGlobalReducer();
    // console.log('store', store)

    useEffect(() => {
        async function loadData(){
            const characters = await getCharacters();
            dispatch({
                type: "GET_CHARACTERS",
                payload: { characters: characters }
            })
        }
        loadData()
    },[])

    return (
        <>
        <div className="m-5">
            <h2>Characters</h2>
            <CategorySlider type={store.characters} />
        </div>
        </>
    )
}

export default ExploreSection;