import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Core
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import Dashboard from './user/UserDashboard';


//Auth
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';

//Admin
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';


//Market Pages
import About from './pages/About';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <Route path="/about" exact component={About}/>
                <Route path="/product/:productId" exact component={Product}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
