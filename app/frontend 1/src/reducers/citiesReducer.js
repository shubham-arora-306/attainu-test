function citiesReducer(state = { citiesList: [] }, action) {

    switch (action.type) {
        // case 'CLEAR_VIDEOS':
        //     return Object.assign({}, state, { videosList: [] });

        case 'CLEAR_CITIES':
            return Object.assign({}, state, { citiesList: null });

        case 'RETRIEVED_CITIES':
            return Object.assign({}, state, { citiesList: action.cities });

        default:
            return state;
    }
}

export default citiesReducer;