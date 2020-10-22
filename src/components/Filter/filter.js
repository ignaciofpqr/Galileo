import React from 'react';
import './filter.css';

const Filter = ({search, order, setOrder, sortProducts, filterProducts}) => {

    const changeOrder = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
        if (e.target.name === "size") {
            filterProducts(e.target.value)
        } else {
            sortProducts(e.target.value)
        }
    }

        return (
            <div className="filter">
                <div className="filter-result">We've found: {search.array.length} results</div>
                <div className="filter-sort">
                    Order by price {"  "}
                    <select name="sort" value={order.sort} onChange={ changeOrder }>
                        <option>Latest</option>
                        <option value="lower"> Low to high </option>
                        <option value="higher"> High to low </option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter by condition {"  "}
                    <select name="size" value={order.size} onChange={  changeOrder }>
                        <option value="All">All</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                </div>
            </div>
        )
    }

export default Filter; 
