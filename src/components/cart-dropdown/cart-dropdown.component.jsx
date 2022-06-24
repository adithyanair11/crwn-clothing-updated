import {CartDropDownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles';
import { Button } from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems,selectIsCartOpen } from '../../store/cart/cart.selector';
import { isCartOpen } from '../../store/cart/cart.action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export const CartDropDown = () => {

    const cartItems = useSelector(selectCartItems);
    const setIsCartOpen = useSelector(selectIsCartOpen);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToCheckOutHandler = () => {
        navigate('/checkout');
        dispatch(isCartOpen(!setIsCartOpen));
    }

    return(
        <CartDropDownContainer>
            <CartItems>
                {   
                    cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>))
                    :
                    (<EmptyMessage>YOUR CART IS EMPTY</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckOutHandler}>checkout</Button>
        </CartDropDownContainer>
    )
} 