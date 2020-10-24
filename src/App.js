import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import index from './components/Index/index';
import about from './components/About/about';
import Contact from './components/Contact/contact';
import SearchIndex from './components/SearchIndex/searchindex.js';
import Nav from './components/NavBar/navbar';
import "fontsource-roboto"
import Catalogo from './components/Catalogo/catalogo';

function App() {
  
  // Search state
  const [search, setSearchApp] = useState({
    array: [],
    word: "",
    filtered: [],
    });


  // Filters state
  const [order, setOrder] = useState({
    size: "",
    sort: "",
  });      

  useEffect(() => {}, [search, order])

      
  //Clone an array 
  const clone = matriz => matriz.map(i => (Array.isArray(i) ? clone(i) : i));


  // Function to order by
  const sortProducts = (sort) => {
    setSearchApp({
      ...search,
      filtered: search.array.sort((a,b) => 
      sort === "lower"
        ? a.price > b.price ? 1 : -1
      : sort === "higher"
        ? a.price < b.price ? 1 : -1
      : a.id < b.id ? 1  : -1
    )})
  };
 

  // Function to filter by condition
  const filterProducts = (size) => {
   if (size === "All"){
     setSearchApp({
       ...search,
       filtered: clone(search.array)
     })
   } else {
     setSearchApp({
    ...search,
    filtered: search.array.filter(product => product.condition.toLowerCase() === size.toLowerCase())
    })
  }
};




  return (
    <div className = 'app'>
      <Router>
          <Nav/>
          <Route
            exact path='/'
            component={index}
          />
          <Route 
          exact path='/about'
          component={about}
          />
          <Route exact path='/searchindex'>
           <SearchIndex {...{search, setSearchApp}}/>
          </Route>
          <Route exact path='/contact'>
          <Contact/>
          </Route>
          <Route exact path='/catalogo'>
          <Catalogo {...{setSearchApp, search, setOrder, order, sortProducts, filterProducts}}/>
          </Route>
      </Router>
    </div>
  );
}

export default App;