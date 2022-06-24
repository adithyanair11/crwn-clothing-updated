import {CartIconContainer,ItemCount} from './cart-icon.styles.jsx';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag (1).svg'
import { isCartOpen } from '../../store/cart/cart.action.js';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector.js';
import { useDispatch } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';

export const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const setIsCartOpen = useSelector(selectIsCartOpen)
    const toggleIsCartOpen = () => dispatch(isCartOpen(!setIsCartOpen));

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