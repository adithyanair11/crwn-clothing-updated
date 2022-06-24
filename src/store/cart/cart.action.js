import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems,productToAdd) => {
    const exisitingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if(exisitingCartItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem)
    }

    return [...cartItems, {...productToAdd,quantity:1 }];
}

const subCartItem = (cartItems,productToRemove) => {
    const filteredCartItems = cartItems.map(cartItem => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem);

    return filteredCartItems.filter(cartItem => cartItem.quantity >= 1)
    
}

const removeCartItem = (cartItems,productToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
}

export const isCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems,productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const subItemFromCart = (cartItems,productToRemove) => {
    const newCartItems = subCartItem(cartItems,productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const removeItemFromCart = (cartItems,productToRemove) => {
    const newCartItems = removeCartItem(cartItems,productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}