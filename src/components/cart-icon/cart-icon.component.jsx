import './cart-icon.styles.css';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag (1).svg'
import { useContext } from 'react';
import { CartItemsContext } from '../../context/cart-items.context';


export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartItemsContext);
    
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <div className='cart-icon-container'>
            <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen}/> 
            <span className='item-count'>0</span>
        </div>
    )
}