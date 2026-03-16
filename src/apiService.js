const baseUrl = 'https://www.swapi.tech/api'

export async function getCharacters() {
    const endPoint = '/people/';
    const urlToFetch = baseUrl + endPoint;

    try {
        const response = await fetch(urlToFetch);
        const responseJS = await response.json();
        const dataList = responseJS.results;
        const dataDetails = [];

        for (const i in dataList) {
            try {
                const response = await fetch(urlToFetch + dataList[i].uid)
                const responseJS = await response.json();
                const dataToPush = {
                    name: responseJS.result.properties.name,
                    gender: responseJS.result.properties.gender,
                    skin_color: responseJS.result.properties.skin_color,
                    hair_color: responseJS.result.properties.hair_color,
                    eye_color: responseJS.result.properties.eye_color,
                    height: responseJS.result.properties.height,
                    birth_year: responseJS.result.properties.birth_year,
                    id: responseJS.result._id,
                }
                dataDetails.push(dataToPush)

            } catch (error) {
                console.error(`Get character id:${dataList[i].uid}`, error)
            }
        }

        console.log(dataDetails)

    } catch (error) {
        console.error('Get characters', error);
    }
}

getCharacters()

export async function getPlanets() {
    const endPoint = '/planets/';
    const urlToFetch = baseUrl + endPoint;

    try {
        const response = await fetch(urlToFetch);
        const responseJS = await response.json();
        const data = responseJS.results;
        console.log('planets', data)
        return data

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
        const data = responseJS.results;
        console.log('vehicles', data)
        return data

    } catch (error) {
        console.error('Get vehicles', error);
    }
}



