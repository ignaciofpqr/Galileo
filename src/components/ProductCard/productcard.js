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
                    <div id="price">${price}</div> <div>({currency})</div><br/>
                    <div>{name}</div> <br/>
                    <div>Condition: {condition}</div><br/>
                    <div>Stock: {stock}</div>
                </div>
            </div>
        </div>
    )
}

export default productCard;