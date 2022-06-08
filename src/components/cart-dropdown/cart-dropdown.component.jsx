import './cart-dropdown.styles.css';
import { Button } from '../custom-button/custom-button.component';
export const CartDropDown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <Button>checkout</Button>
        </div>
    )
}