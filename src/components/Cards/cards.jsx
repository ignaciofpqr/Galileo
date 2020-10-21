import React, {useState, useEffect} from 'react';
import ProductCard from '../ProductCard/productcard';
import {Pagination} from '@material-ui/lab'
import "fontsource-roboto/500.css" // All styles included.
import './cards.css';

const Cards = ({search}) => {

    const [page,setPage] = useState(1)
    const [count,setCount] = useState()

    const handlePageChange = (event,value) => {
        setPage(value)
    }

    if(search.filtered.length) {
        return (
            <div className="generalcards">
                <section className="cardscontent">
                     {search.filtered.map(c => <ProductCard
                      img={c.thumbnail}
                      name={c.title}
                      price={c.price}
                      currency={c.currency_id}
                      condition={c.condition}
                      stock={c.available_quantity}
                        />)}
                </section>
            </div>
        )
    } else {
        return (
            <div className="Loading">
            Loading...
            </div>
        )
    }
}

export default Cards;