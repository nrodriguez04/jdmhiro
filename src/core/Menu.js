import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import { itemTotal } from './cartHelpers';
import '../styles/_menu.scss';
import '../images/shopping.png';


const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: '#b22222'};
    } else {
        return {color: '#000000'};
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="navigation">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard">Dashboard</Link>
                        </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/admin/dashboard")} to="/admin/dashboard">Dashboard</Link>
                        </li>
            )}

            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/shop")} to="/shop">Shop</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/about")} to="/about">About</Link>
            </li>

            {!isAuthenticated() && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Signin</Link>
                    </li>
            
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
                    </li>
                </>
            )}

            {isAuthenticated() && (
                    <li className="nav-item">
                        <span className="nav-link" style={isActive(history, "/signout")} style={{cursor: 'pointer'}} onClick={() => signout(() => {history.push('/');})}>Signout</span>
                    </li>
            )}

            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, "/cart")} to="/cart"><img className="cart" src={require ('../images/shopping.png')} alt="cart"/><sup><small className="cart-badge">{itemTotal()}</small></sup></Link>
            </li>
        </ul>
    </div>
);

export default withRouter(Menu);