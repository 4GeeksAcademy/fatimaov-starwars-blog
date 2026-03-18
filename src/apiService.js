const baseUrl = 'https://swapi.dev/api/'

export async function getCharacters() {
    const endPoint = '/people/';
    const urlToFetch = baseUrl + endPoint;

    try {
        const response = await fetch(urlToFetch);
        const responseJS = await response.json();
        const dataList = responseJS.results;
        const dataDetail = [];
        for (const i in dataList) {
            const characterData = {
                name: dataList[i].name,
                gender: dataList[i].gender,
                skinColor: dataList[i].skin_color,
                hairColor: dataList[i].hair_color,
                eyeColor: dataList[i].eye_color,
                height: dataList[i].height,
                birthYear: dataList[i].birth_year,
                id: (dataList[i].url).replace('https://swapi.dev/api/people/', '') ,

            }
            dataDetail.push(characterData)
        }
        return dataDetail;

    } catch (error) {
        console.error('Get characters', error);
    }
}


export async function getPlanets() {
    const endPoint = '/planets/';
    const urlToFetch = baseUrl + endPoint;

    try {
        const response = await fetch(urlToFetch);
        const responseJS = await response.json();
        const dataList = responseJS.results;
        const dataDetail = [];
        
        for (const i in dataList) {
            const planetData = {
                name: dataList[i].name,
                population: dataList[i].population,
                terrain: dataList[i].terrain,
                climate: dataList[i].climate,
                orbitalPeriod: dataList[i].orbital_period,
                rotationPeriod: dataList[i].rotation_period,
                diameter: dataList[i].diameter,
                id: (dataList[i].url).replace('https://swapi.dev/api/planets/', '') ,
            }
            dataDetail.push(planetData)
        }
        
        return dataDetail;

    } catch (error) {
        console.error('Get planets', error);
    }
}


export async function getVehicles() {
    const endPoint = '/vehicles/';
    const urlToFetch = baseUrl + endPoint;

    try {
        const response = await fetch(urlToFetch);
        const responseJS = await response.json();
        const dataList = responseJS.results;
        const dataDetail = [];
        
        for (const i in dataList) {
            const planetData = {
                name: dataList[i].name,
                cargoCapacity: dataList[i].cargo_capacity,
                passengers: dataList[i].passengers,
                model: dataList[i].model,
                vehicleClass: dataList[i].vehicle_class,
                length: dataList[i].length,
                maxAtmospheringSpeed: dataList[i].max_atmosphering_speed,
                id: (dataList[i].url).replace('https://swapi.dev/api/vehicles/', '') ,
            }
            dataDetail.push(planetData)
        }
        
        return dataDetail;

    } catch (error) {
        console.error('Get vehicles', error);
    }
}



