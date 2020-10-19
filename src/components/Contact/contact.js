import React from 'react';
import './contact.css';
import "fontsource-roboto/500.css" // All styles included.
import {Link} from 'react-router-dom';

const contact = () => {

return (
    <div>
      <div className= "backgroundContact" >
          <div id="textBoxContact">      
              <div id="titleContact"><h3>Contact Us</h3></div> <br/>
              <span id="introContact">We are here to help you. Please fill out this form: </span><br/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              <form className='formsContact'>
                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email address</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Message</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your message"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
           </div>
      </div>    
    </div>
    )

}

export default contact; 