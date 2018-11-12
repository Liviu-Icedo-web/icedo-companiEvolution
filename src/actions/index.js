import axios from 'axios';

export const FETCH_COMPANY ='FETCH_COMPANY';

export function fetchCompany(){
    const url = './companies.json';
    const request = axios.get(url);

    return{
        type: FETCH_COMPANY,
        payload: request
    };
}