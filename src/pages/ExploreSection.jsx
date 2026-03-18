import React, { useEffect } from "react";
import CategorySlider from "../components/CategorySlider";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getPeople, getPlanets, getVehicles } from "../apiService";

function ExploreSection() {

    const { store, dispatch } = useGlobalReducer();
    // console.log('store', store)

    useEffect(() => {
        async function loadData() {
            const people = await getPeople();
            const planets = await getPlanets();
            const vehicles = await getVehicles();
            dispatch({
                type: "LOAD_DATA",
                payload: {
                    people: people,
                    planets: planets,
                    vehicles: vehicles,
                }
            })
        }
        loadData();
    }, [])

    return (
        <>
            <div className="m-5 d-flex flex-column gap-5">
                <div>
                    <h2>people</h2>
                    <CategorySlider
                        type={store.people}
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
                <div>
                    <h2>Vehicles</h2>
                    <CategorySlider
                        type={store.vehicles}
                        dataLabels={
                            {
                                cargoCapacity: 'Cargo capacity:',
                                passengers: 'Passengers:',
                                vehicleClass: 'Class:',
                            }
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default ExploreSection;