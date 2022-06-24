import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CheckOutItem } from '../../components/checkout-item/checkout-item.component';
import { CheckOutContainer,CheckOutItems,Headers,Total } from './check-out.styles';
import { PaymentForm } from '../../components/payment-form/payment-form.component';

export const CheckOutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
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
            <PaymentForm />
        </CheckOutContainer>
    )
}