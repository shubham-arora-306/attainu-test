export function FetchCities(){
    let url;

    url = 'http://localhost:8000/cities'
    console.log(url);
    return fetch(url)
    .then(function(data) {
        // console.log(data)
        return data.json();
    });
}


export function FetchAirports(query){
    let url;

    url = `http://localhost:8000/airports/${query}`
    console.log(url);
    return fetch(url)
    .then(function(data) {
        // console.log(data)
        return data.json();
    });
}

// export default FetchCities