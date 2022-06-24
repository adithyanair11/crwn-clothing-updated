import {CheckItem,CheckItemSpan,CheckItemImage,Arrows,Remove} from './checkout-item.styles';
import { addItemToCart,subItemFromCart,removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const CheckOutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const {imageUrl,name,quantity,price} = cartItem;
    const cartItems = useSelector(selectCartItems);

    const increaseQuantity = () => {
        return dispatch(addItemToCart(cartItems,cartItem));
    }
    const decreaseQuantity = () => {
        return dispatch(subItemFromCart(cartItems,cartItem));
    }
    const removeItem = () => {
        return dispatch(removeItemFromCart(cartItems,cartItem));
    }
    return(
        <CheckItem>
            <CheckItemImage src={imageUrl} alt="product"/>
            <CheckItemSpan>{name}</CheckItemSpan>

            <CheckItemSpan>
            <Arrows onClick={decreaseQuantity}>&#8249;</Arrows> {quantity} <Arrows onClick={increaseQuantity}>&#8250;</Arrows>
            </CheckItemSpan>

            <CheckItemSpan>{price}</CheckItemSpan>
            <Remove onClick={removeItem}>&#215;</Remove>
        </CheckItem>
    )
}