import {SHOW_COUNTRIES, UNMOUNT_ALL_COUNTRIES}  from '../actions/index'


const initialState = {
    countries:[],
    filterCountries: [],
    countryDetail: [],
    activities: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_COUNTRIES:
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
        case UNMOUNT_ALL_COUNTRIES:
            return {
                ...state,
                countries: [],
            }
        default: return{ 
            state,
        };
    }
};

export default reducer