import React, {useState, useEffect} from 'react';
import ProductCard from '../ProductCard/productcard';
import {Pagination} from '@material-ui/lab';
import Axios from 'axios';
import "fontsource-roboto/500.css" // All styles included.
import './cards.css';

const Cards = ({search, setSearchApp}) => {

    const [productscatalogo, setProductscatalogo] = useState();
    const [page,setPage] = useState(1)
    const [count,setCount] = useState()

    const handlePageChange = (event,value) => {
        setPage(value)
    }

    useEffect (() => {

        const fetchData = async () => {
            const {data} = await Axios.get(`http://localhost:4000/api/search?query=${search.word}}`)
            let counter = Math.ceil(data.length/20)
            setCount(counter)
            setProductscatalogo(data.rows)
        }
        fetchData()
    }, [search, page])

    if(search.filtered.length) {
        return (
            <div className="generalcards">
                <section className="cardscontent">
                     {search.filtered.map(c => 
                     <ProductCard
                      img={c.thumbnail}
                      name={c.title}
                      price={c.price}
                      currency={c.currency_id}
                      condition={c.condition}
                      stock={c.available_quantity}
                     />)}
                </section>
                <div style= {{ display: "flex", justifyContent: "flex-end"}}>
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
                </div>
            </div>
        )
    } else {
        return (
            <div className="Loading">
            <input type="Image" src="https://i.pinimg.com/originals/b6/8e/f4/b68ef42276e30263d39b0256f43699ce.gif" height="400" width="500"/>
            </div>
        )
    }
}

export default Cards;