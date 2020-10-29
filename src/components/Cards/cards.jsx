import React, {useEffect} from 'react';
import ProductCard from '../ProductCard/productcard';
import "fontsource-roboto/500.css" // All styles included.
import './cards.css';

const Cards = ({search}) => {

    useEffect (() => { }, [search])

    if(search.filtered.length) {
        return (
            <div className="generalcards">
                <a href="back2top"></a>
                <div className="cardscontent">
                     {search.filtered.map(c => 
                     <ProductCard
                      img={c.thumbnail}
                      name={c.title}
                      price={c.price}
                      currency={c.currency_id}
                      condition={c.condition}
                      stock={c.available_quantity}
                     />)}
                </div>
                <a id="back2top" href="#top">Go back to the top <span role="img">👆</span></a>
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