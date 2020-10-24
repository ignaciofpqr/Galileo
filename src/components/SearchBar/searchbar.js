import React from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./searchbar.css";
import "fontsource-roboto/500.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchBar = ({setSearchApp, search}) => {

    function handleChange(e){
        setSearchApp({
            ...search,
            word: e.target.value
            });
    }

    async function handleSubmit(e){
        if(!search.word){
            return alert ("Write a product name!")
        };
        await axios.get (`http://localhost:4000/api/search?query=${search.word}`) 
        .then ((res) => {
            setSearchApp({
                array: res.data,
                word: search.word,
                filtered: res.data
                });
        })
    }
    
    
    return (
        <div>
            <div class="buscar-caja">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
                <input class="buscar-txt" value = {search.word} type="text" name="" placeholder="Search for anything..." onChange = { (e) => handleChange (e) } />
                <a class="buscar-btn"><Link to = {search.word && `/catalogo`}> <button className = "btn2" type = "submit" onClick = { (e) => handleSubmit (e) } ><SearchOutlinedIcon/></button></Link>
                <i class="far fa search"></i>
                </a>
            </div>
        </div>
    )
    
}

export default SearchBar; 


// .then((r) => {
            //     if (r.results !== undefined) {
            //         const product = {
            //             name: r.results.title,
            //             price: r.results.price,
            //             currency: r.results.currency_id,
            //             condition: r.results.condition,
            //             img: r.results.thumbnail,
            //             stock: r.results.available_quantity,
            //         }
            //     }
            // })


            // https://api.mercadolibre.com/sites/MLA/search?q=${search}