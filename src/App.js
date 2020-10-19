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
// import Footer from './components/Footer/footer';

function App() {
  
  // Search state
  const [search, setSearchApp] = useState({
    array: [],
    word: "",
  });

  // Products state
  const [products, setProducts] = useState('');

  useEffect(() => {
    console.log(search)
      }, [search])

  
  // Pagination states
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);


  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const  currentProds = (search.array).slice(indexOfFirstPost, indexOfLastPost);

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
          <Catalogo {...{search, setSearchApp}}/>
          </Route>
          {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;