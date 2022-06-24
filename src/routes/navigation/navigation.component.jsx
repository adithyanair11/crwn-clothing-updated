import React from "react";
import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink} from'./navigation.styles';
import { Outlet} from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { Fragment } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropDown } from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import {selectCurrentUser} from '../../store/user/user.selector';
export const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ?
                        (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                        :
                        (<NavLink to='/signin'>
                        SIGN IN
                    </NavLink>)
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}