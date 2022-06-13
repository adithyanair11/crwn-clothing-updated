import { useContext } from 'react';
import { CartItemsContext } from '../../context/cart-items.context';
import { CheckOutItem } from '../../components/checkout-item/checkout-item.component';

import { CheckOutContainer,CheckOutItems,Headers,Total } from './check-out.styles';

export const CheckOutPage = () => {
    const {cartItems,cartTotal} = useContext(CartItemsContext);
    return (
        <CheckOutContainer>
        <Headers>
            <span>Products</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </Headers>
            <CheckOutItems>
            {
                cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            </CheckOutItems>
            <Total>
                <h1 className='total'>TOTAL: ${cartTotal}</h1>
            </Total>
        </CheckOutContainer>
    )
}