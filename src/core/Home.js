import React, { useState, useEffect } from 'react';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import Menu from './Menu';
//import Iframe from 'react-iframe';
import Footer from '../components/Footer';



//Header Image
import Header from '../images/Header.png';

//Styles
import '../styles/_home.scss';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold')
        .then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <div>
            <Menu />
            <img src={Header} className="header-img" require/>
            <Search className="search" />
            <div className="home-page">
                <div className="new">
                <h2 className="new-arrivals">New Arrivals</h2>
                    {productsByArrival.map((product, i) => (
                        <div key={i}>
                            <Card product={product} className="card-one" />
                        </div>
                    ))}
                </div>

                <div className="best">
                <h2 className="best-sellers">Best Sellers</h2>
                    {productsBySell.map((product, i) => (
                        <div key={i}>
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
        <Footer />
        </div>
    );
};

export default Home;