function airportsReducer(state = { airportList: [] }, action) {
    // console.log('he;;p' + action.airport_name + ' v  '+ action.IATA_code)

    switch (action.type) {

        case 'CLEAR_AIRPORTS':
            return Object.assign({}, state, { airportList: [] });

        case 'RETRIEVED_AIRPORTS':
            return { airportList: state.airportList.concat({
                name :  action.airport_name,
                code : action.IATA_code
            }) }

        default:
            return state;
    }
}

export default airportsReducer;