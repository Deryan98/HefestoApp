import {API_DEV} from '../constants/Url';

export const getAllStores = () => {
    const Url = `${API_DEV}/tiendas.json`;
    return fetch(Url)
    .then( response => response.json() )
    .then( data => data );
};