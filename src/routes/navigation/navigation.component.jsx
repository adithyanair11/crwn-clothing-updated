import React from "react";
import './navigation.styles.css';
import { Outlet,Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { Fragment,useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropDown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartItemsContext } from "../../context/cart-items.context";

export const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    const {isCartOpen} = useContext(CartItemsContext)
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?
                        (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
                        :
                        (<Link className="nav-link" to='/signin'>
                        SIGN IN
                    </Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}