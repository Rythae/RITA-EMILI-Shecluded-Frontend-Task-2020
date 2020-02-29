import axios from "axios";

export const FETCH_CATS = 'FETCH_CATS';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';


export const getLotr = (res) => {
    return {
        type: FETCH_CHARACTERS,
        result: res
    };
}


export const getCats = (res) => {
    return {
        type: FETCH_CATS,
        payload: res
        
    };
}

export const fetchCats = () => {
    return dispatch => {
        const apiKey = `d3cd3f3e-a111-4460-8c2d-faf8e578ea96`
            return axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=1&order=asc?key=${apiKey}`, {
                method: "GET",
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                }
              })
                .then(response => response.data)
                 .then(res => {
                    dispatch(getCats(res));
                })
            
        }
}


export const fetchLotr = () => {
    return dispatch => {
        const token = `htbdbQC0aNb5MVrVWTTQ`
            return axios.get(`https://the-one-api.herokuapp.com/v1/character`, {
                method: "GET",
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'Authorization': `Bearer ${token}`
                }
              })
              .then(response => response.data.docs)
              .then(res => {
                 console.log(res)
                 dispatch(getLotr(res));
            })
    }
}