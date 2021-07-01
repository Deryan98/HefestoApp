import {API_DEV} from '../constants/Url';

export const getAllStores = async () => {
    const Url = `${API_DEV}/tiendas.json`;
    const response = await fetch(Url);
    const data = await response.json();
    return data;
};