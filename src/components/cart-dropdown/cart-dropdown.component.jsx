import {CartDropDownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles';
import { Button } from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartItemsContext } from '../../context/cart-items.context';
import { useNavigate } from 'react-router-dom';

export const CartDropDown = () => {
    const {cartItems,isCartOpen,setIsCartOpen} = useContext(CartItemsContext);

    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
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