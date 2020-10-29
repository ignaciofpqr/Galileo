import React from 'react';
import Button from '@material-ui/core/Button';
import './index.css';
import "fontsource-roboto/500.css" // All styles included.
import {Link} from 'react-router-dom';

const index = () => {

return (
    <div className="fullindex"> 
      <div className="background-index">
          <div id="textBox">      
              <div id="titleIndex"><h1>Welcome to Galileo!</h1></div> <br/>
              <div id="introIndex">You want it?   We got it.</div><br/>
              
              
              <Link to='/searchIndex' >
                <Button id="buttonIndex" variant="contained" color="primary" Link to="/searchindex">
                    Click to Search 
                </Button>
              </Link>  
           </div>
      </div>    
    </div>
    )

}

export default index; 