import './searchindex.css';
import React from 'react';
import "fontsource-roboto/500.css";
import SearchBar from '../SearchBar/searchbar';


const searchindex = ({setSearchApp, search}) => {

  // console.log(setSearchApp)
  // console.log(search)


return (
    <div>
      <head> <script defer src = "https://use.fontawesome.com/releases/v5.0.6/js/all.js"/></head>
      <div className= "backgroundsearchindex" >
      <div id="titleindexsearchcontent"> 
            <div id="titleindexsearch"><h2>What are you looking for?</h2></div> <br/>
              <div>
                  <SearchBar setSearchApp={setSearchApp} search={search}
                  />
              </div>
            </div>
      </div>    
    </div>
    )
}

export default searchindex; 