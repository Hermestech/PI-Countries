import axios from "axios";
import { COUNTRIES_ENDPOINT } from "../constants";

export const showCountries = () => async (dispatch) =>{
    const countries = await axios(COUNTRIES_ENDPOINT)
    dispatch({
        type: 'SHOW_COUNTRIES',
        payload: countries.data
    })
}