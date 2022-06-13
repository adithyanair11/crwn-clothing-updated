import { createContext,useState,useEffect } from "react";


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

export const CartItemsContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    subItemFromCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})

export const CartItemsProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [cartTotal,setCartTotal] = useState(0);

    const [cartItems,setCartItems] = useState([]);

    const [cartCount,setCartCount] = useState(0);


    useEffect(() => {
        const newCartCount = cartItems.reduce((total,item) => total+item.quantity ,0);
        setCartCount(newCartCount);
    },[cartItems])

    useEffect(() => {
        const cartTotal = cartItems.reduce((total,item) => total+item.quantity*item.price,0);
        setCartTotal(cartTotal);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const subItemFromCart = (productToRemove) => {
        setCartItems(subCartItem(cartItems,productToRemove))
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove))
    }
    
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems,cartCount,subItemFromCart,removeItemFromCart,cartTotal};

    return <CartItemsContext.Provider value={value}>
        {children}
    </CartItemsContext.Provider>
}