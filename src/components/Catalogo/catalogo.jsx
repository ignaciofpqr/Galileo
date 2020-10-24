import React from 'react';
import Cards from '../Cards/cards.jsx';
import Filter from '../Filter/filter.js';
import SearchBarCatalogo from '../SearchBarCatalogo/searchbarcatalogo.jsx';
import './catalogo.css';

const catalogo = ({setSearchApp, search, setOrder, order, sortProducts, filterProducts}) => {


  return ( 
    <div className='catalogo-body'>
      <SearchBarCatalogo {...{search, setSearchApp}}/>
      <Filter {...{search, setOrder, order, sortProducts, filterProducts}}/>
      <Cards {...{search, setSearchApp}}/>
    </div>
    )
};

export default catalogo; 