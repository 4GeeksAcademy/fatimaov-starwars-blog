import React, { useEffect } from "react";
import CategorySlider from "../components/CategorySlider";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getPeople, getPlanets, getVehicles } from "../apiService";

function ExploreSection() {

    const { store, dispatch } = useGlobalReducer();

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
                    <h2 className="text-danger fw-bold mb-4">People</h2>
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
                    <h2 className="text-danger fw-bold mb-4">Planets</h2>
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
                    <h2 className="text-danger fw-bold mb-4">Vehicles</h2>
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