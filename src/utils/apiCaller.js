import axios from 'axios';
import * as Configapi from './../constant/Configapi';


export default function callAPI(endpoint, method='GET', body) {
    return axios({
        method: method,
        url: `${Configapi.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}