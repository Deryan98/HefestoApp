import { Details } from '../../data/dummy-data';
import Product from '../../models/Product';
import { TOGGLE_WISHLIST } from '../actions/products';

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