import { Button } from '../custom-button/custom-button.component';
import './product-card.styles.css';
import { useContext } from 'react';
import { CartItemsContext } from '../../context/cart-items.context';


export const ProductCard = ({product}) => {
    const {imageUrl,name,price} = product;
    const {addItemToCart} = useContext(CartItemsContext);
    const addProductToCart = () => addItemToCart(product);
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