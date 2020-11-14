export const TOGGLE_WISHLIST = 'TOGGLE_WISHLIST';

export const toggleWishlist = (id) => {
    return { type: TOGGLE_WISHLIST, productId: id };
};