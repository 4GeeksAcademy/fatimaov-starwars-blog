import React from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const dataLabels = {
    people: {
        name: 'Name',
        birthYear: 'Birth',
        gender: 'Gender',
        height: 'Height',
        skinColor: 'Skin Color',
        eyeColor: 'Eye Color'
    },
    planets: {
        name: 'Name',
        climate: 'Climate',
        population: 'Population',
        orbitalPeriod: 'Orbital Period',
        rotationPeriod: 'Rotation Period',
        diameter: 'Diameter',
    },
    vehicles: {
        name: 'Name',
        model: 'Model',
        vehicleClass: 'Class',
        cargoCapacity: 'Cargo Capacity',
        maxAtmospheringSpeed: 'Max. Atmosp. Speed',
        passengers: 'Passengers'
    }
}

function Details() {

    const { store, dispatch } = useGlobalReducer();
    const { type, id } = useParams();

    const elementData = store[type].find((element) => element.id === `${type}/${id}/`)

    const labels = Object.values(dataLabels[type])
    const property = Object.keys(dataLabels[type])

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
                <div className="border-top border-danger d-flex justify-content-center column-gap-5 py-3 text-danger flex-wrap">
                    {labels.map((label, i) => {
                        return (
                            <div className="text-center">
                                <p className="m-0 fw-bold">{label}</p>
                                <p>{elementData[property[i]]}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Details;