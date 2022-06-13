import {CheckItem,CheckItemSpan,CheckItemImage,Arrows,Remove} from './checkout-item.styles';
import { useContext } from 'react';
import { CartItemsContext } from '../../context/cart-items.context';

export const CheckOutItem = ({cartItem}) => {
    const {imageUrl,name,quantity,price} = cartItem;
    const {addItemToCart,subItemFromCart,removeItemFromCart} = useContext(CartItemsContext);

    const increaseQuantity = () => {
        return addItemToCart(cartItem);
    }
    const decreaseQuantity = () => {
        return subItemFromCart(cartItem);
    }
    const removeItem = () => {
        return removeItemFromCart(cartItem);
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