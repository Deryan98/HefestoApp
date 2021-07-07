import { API_DEV } from "../constants/Url";

export const getAllCategories = async () => {
    const Url = `${API_DEV}/categories.json`;
    const response = await fetch(Url);
    const data = await response.json();
    return data; 
}