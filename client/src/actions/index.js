import axios from "axios";

export const SHOW_COUNTRIES = 'SHOW_COUNTRIES';
export const UNMOUNT_ALL_COUNTRIES = 'UNMOUNT_ALL_COUNTRIES';


export const showCountries = () => async (dispatch) =>{
    try{
        const countries = await axios.get('/countries')
        dispatch({
            type: 'SHOW_COUNTRIES',
            payload: countries.data
        })
    } catch(error){
        console.log(error)
    }
}

export const getOneCountry = () => dispatch => {
    
}

export const unmountCountries = () =>({type: UNMOUNT_ALL_COUNTRIES})