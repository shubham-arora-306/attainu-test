export function RetrievedCities(cities){
    console.log(cities)
    console.log('RETRIEVED_CITIES')
    return{
        type : 'RETRIEVED_CITIES',
        cities : cities
    }
}

// export default RetrievedCities;


export function ClearCities(){
    console.log('CLEAR_CITIES')
    return{
        type : 'CLEAR_CITIES'
    }
}