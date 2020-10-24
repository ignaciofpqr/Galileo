import React from 'react';
import './productcard.css';


const productCard = ({img, name, price, condition, stock, currency}) => {


    return (
        <div>
            <div className = 'CardWrapper'>
                <div className = 'PCImageWrapper'>
                <img src={img} alt="Product" className='PCimage'/>
                </div>
                <div className = 'PCDataWrapper'>
                    <a id="price">${price}</a> <a>({currency})</a><br/>
                    <a>{name}</a> <br/>
                    <a>Condition: {condition}</a><br/>
                    <a>Stock: {stock}</a>
                </div>
            </div>
        </div>
    )
}

export default productCard;