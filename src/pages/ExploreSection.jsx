import React, { useEffect } from "react";
import CategorySlider from "../components/CategorySlider";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getCharacters, getPlanets } from "../apiService";

function ExploreSection() {

    const { store, dispatch } = useGlobalReducer();
    console.log('store', store)

    useEffect(() => {
        async function loadData() {
            const characters = await getCharacters();
            const planets = await getPlanets();
            dispatch({
                type: "LOAD_DATA",
                payload: {
                    characters: characters,
                    planets: planets,
                }
            })
        }
        loadData()
    }, [])

    return (
        <>
            <div className="m-5 d-flex flex-column gap-5">
                <div>
                    <h2>Characters</h2>
                    <CategorySlider
                        type={store.characters}
                        dataLabels={
                            {
                                gender: 'Gender:',
                                hairColor: 'Hair-color:',
                                eyeColor: 'Eye-color:'
                            }
                        }
                    />
                </div>
                <div>
                    <h2>Planets</h2>
                    <CategorySlider
                        type={store.planets}
                        dataLabels={
                            {
                                population: 'Population:',
                                terrain: 'Terrain:',
                            }
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default ExploreSection;