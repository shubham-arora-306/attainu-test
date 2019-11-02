export function RetrievedAirports(airports){
    console.log(airports)
    console.log('RETRIEVED_AIRPORTS')
    return{
        type : 'RETRIEVED_AIRPORTS',
        airport_name : airports.airport_name,
        IATA_code : airports.IATA_code
        // airports : airports
    }
}

// export default RetrievedCities;


export function ClearAirports(){
    console.log('CLEAR_AIRPORTS')
    return{
        type : 'CLEAR_AIRPORTS'
    }
}