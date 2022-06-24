import { Button } from '../custom-button/custom-button.component';
import './product-card.styles.css';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {imageUrl,name,price} = product;
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
    
    return(
        <div className='product-card-container'>
            <div className='product-image'>
                <img src={imageUrl} alt="product"/>
            </div>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>
            Add to cart
            </Button>
        </div>
    )
}