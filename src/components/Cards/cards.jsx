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

    if(search.array.length) {
        return (
            <div className="generalcards">
                <div className="Aclaracion">
                    <div className="AclaracionText">
                <div className="SearchKey">{search.word}</div>
                We've found: {search.array.length} results <br/>
                <div className="filtros">Order by: <br/>
                Price <select className="Price" class="form-control form-control-sm">
                     <option>Higher price</option>
                     <option>Lower price</option>   
                </select>
                Condition <select className="Condition" class="form-control form-control-sm">
                     <option>New</option>
                     <option>Used</option>
                </select>
                </div>
                </div>
            </div>
                <section className="cardscontent">
                     {search.array.map(c => <ProductCard
                      img={c.thumbnail}
                      name={c.title}
                      price={c.price}
                      currency={c.currency_id}
                      condition={c.condition}
                      stock={c.available_quantity}
                        />)}
                </section>
                {/* <div style = {{display: "flex", justifyContent: "space-around"}}>
                    <Pagination
                        className="my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </div> */}
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