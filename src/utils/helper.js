export const getCartFromLocalStorage = () => {
    return new Promise((resolve,reject) => {
    const cart = window.localStorage.getItem('cart');
    resolve(cart);
}) 
}

export const storeCartInLocalStorage = (cart) => {
    window.localStorage.setItem('cart',JSON.stringify(cart));
}
