import React, {useState, useEffect} from 'react';
import Cards from '../Cards/cards.jsx';
import Filter from '../Filter/filter.js';
import SearchBarCatalogo from '../SearchBarCatalogo/searchbarcatalogo.jsx';
import './catalogo.css';
import Pagination from './pagination.jsx';

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