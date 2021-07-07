import { Details } from '../../data/dummy-data';
import React, { useEffect, useState } from 'react';
//import Product from '../../models/Product';
import { TOGGLE_WISHLIST } from '../actions/products';
import { getAllProducts } from '../../api/products';
/*
function productsReturn() {
    const [Products, setProducts] = useState([]);

    useEffect (() => {
        try {
            getAllProducts()
            .then((response) => {
            let Data = Object.entries(response).map(([id, entry]) => {
                return { ...entry, id }
            });
            setProducts(Data);
            });
        } catch (error) { 
            console.log(error);
            setError(error); 
        };
    });
    return { ...Products};
}

let {productsAux} = productsReturn();

const initialState = {
    products: () => {
        const [Products, setProducts] = useState([]);
        useEffect(() => {
            try {
                getAllProducts()
                    .then((response) => {
                        let Data = Object.entries(response).map(([id, entry]) => {
                            return { ...entry, id }
                        });
                        setProducts(Data);
                    });
            } catch (error) {
                console.log(error);
                setError(error);
            };
        }); return {...Products};
    },
    wishProducts: []
};

*/
const initialState = {
    products: Details,
    wishProducts: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_WISHLIST:
            const existingIndex = state.wishProducts.findIndex(product => product.id === action.productId);
            if (existingIndex >= 0) {
                const updatedWishlist = [...state.wishProducts];
                updatedWishlist.splice(existingIndex, 1);
                return { ...state, wishProducts: updatedWishlist };
            } else {
                const product = state.products.find(products => products.id === action.productId);
                return { ...state, wishProducts: state.wishProducts.concat(product) };
            }
        default:
            return state;
    }
};

export default productReducer;