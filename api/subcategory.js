import { API_DEV } from "../constants/Url";

export const getAllSubCategories = async () => {
    const Url = `${API_DEV}/subcategory.json`;
    const response = await fetch(Url);
    const data = await response.json();
    return data; 
}