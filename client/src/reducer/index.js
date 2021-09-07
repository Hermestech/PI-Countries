const initialState = {
    countries:[],
    filterCountries: [],
    countryDetail: [],
    activities: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_COUNTRIES':
            return {
                ...state,
                filterCountries: action.payload,
                countries:action.payload,
            }
        case 'GET_COUNTRY':
            return{
                ...state,
                filterCountries: action.payload
            }
        default: return{ 
            state,
        };
    }
};

export default reducer