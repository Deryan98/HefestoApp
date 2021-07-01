import {API_DEV} from '../constants/Url';

export const getAllProducts = () => {
    const Url = `${API_DEV}/productos.json`;
    return fetch(Url)
    .then( response => response.json() )
    .then( data => data );
};