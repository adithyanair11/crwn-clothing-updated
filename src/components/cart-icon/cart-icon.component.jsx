import {CartIconContainer,ItemCount} from './cart-icon.styles.jsx';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag (1).svg'
import { useContext } from 'react';
import { CartItemsContext } from '../../context/cart-items.context';


export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen,cartCount} = useContext(CartItemsContext);
    
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer>
            <ShoppingIcon style={{
                width:"25",
                height:"25"
            }} onClick={toggleIsCartOpen}/> 
            <ItemCount>
                {cartCount}
            </ItemCount>
        </CartIconContainer>
    )
}