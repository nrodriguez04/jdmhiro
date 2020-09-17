import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";
import { prices } from "./FixedPrices";
//import Footer from '../components/Footer';

//styles
import '../styles/_shop.scss';

//images 
import about from '../images/about.jpg';

const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    const [setError] = useState(false);
    const [limit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResults = newFilters => {
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load more
                </button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === "price") {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };

    return (
        <>
        <Menu />
        <div className="contain-top">
            <img src={about} className="about-img" require/>
            <div className="header">Shop</div>
        </div>
        <div className="main-content">
        <div className="row">
                <div className="col-4">
                    <div className="filters">
                        <h4>Filter</h4>
                            <div className="border">
                                <h5>Category</h5>
                                    <ul className="checkbox">
                                        <Checkbox
                                        categories={categories}
                                        handleFilters={filters =>
                                        handleFilters(filters, "category")
                                        }
                                        />
                                    </ul>

                                <h5>Price</h5>
                                    <div>
                                        <Radiobox
                                        prices={prices}
                                        handleFilters={filters =>
                                        handleFilters(filters, "price")
                                        }
                                        />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="products">
                        <h2 className="mb-4">Products</h2>
                        <hr />
                            <div className="row">
                                {filteredResults.map((product, i) => (
                                    <div key={i} className="col-4 mb-3">
                                        <Card product={product} />
                                    </div>
                                ))} 
                            </div>
                        {loadMoreButton()}
                    </div>
                </div>
            </div>
        </div>
            </>
    )
};

export default Shop;