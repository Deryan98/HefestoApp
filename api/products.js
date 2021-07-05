import {API_DEV} from '../constants/Url';

export const getAllProducts = async () => {
    const Url = `${API_DEV}/products.json`;
    const response = await fetch(Url);
    const data = await response.json();
    return data;
};