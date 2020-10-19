import React, {useState, useEffect} from 'react';
import Cards from '../Cards/cards.jsx';
import SearchBarCatalogo from '../SearchBarCatalogo/searchbarcatalogo.jsx';
import './catalogo.css';
import Pagination from './pagination.jsx';

const catalogo = ({setSearchApp, search}) => {


  return ( 
    <div className='catalogo-body'>
      <SearchBarCatalogo {...{setSearchApp, search}}/>
      <Cards {...{search}}/>
    </div>
    )
};

export default catalogo; 