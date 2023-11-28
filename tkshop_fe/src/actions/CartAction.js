export const cartItems = (Items) => ({
    type: 'CART_ITEMS',
    payload: Items,
});

export const selectAllItems = (selectAll) => ({
    type: 'SELECT_ALL_PRODUCT',
    payload: selectAll,
})

export const deleteCart = (selectAll) => ({
    type: 'DELETE_CART',
    payload: selectAll,
})

export const deleteCartItem = (productId, sku) => ({
    type: 'DELETE_CART_ITEM',
    payload: { productId, sku },
});

export const increaseQuantity = (productId, sku) => ({
    type: 'INCREASE_QUANTITY',
    payload: { productId, sku },
});

export const decreaseQuantity = (productId, sku) => ({
    type: 'DECREASE_QUANTITY',
    payload: { productId, sku },
});

export const selectProduct = (productId, sku)=> ({
    type: 'SELECT_PRODUCT',
    payload: {productId, sku},
})