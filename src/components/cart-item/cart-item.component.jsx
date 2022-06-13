import {CartItemContainer,CartItemImage,ItemImage,CartItemDetails} from './cart-item.styles';


export const CartItem = ({cartItem}) => {
    const {name,quantity,imageUrl,price} = cartItem;
    return(
        <CartItemContainer>
            <CartItemImage>
                <ItemImage src={imageUrl} alt='product'/>
            </CartItemImage>
            <CartItemDetails>
                <span>{name}</span>
                <span>{quantity} X ${price}</span>
            </CartItemDetails>
        </CartItemContainer>
    )
}