import React from 'react';
import Button from '@material-ui/core/Button';
import './about.css';
import "fontsource-roboto/500.css" // All styles included.
import {Link} from 'react-router-dom';

const about = () => {

return (
    <div>
      <div className= "background" >
          <div id="textBoxAbout">      
              <div id="titleAbout"><h2>About Us</h2></div> <br/>
              <div id="introAbout"> Lorem ipsum amet sunt aute dolor nisi in id eiusmod sunt fugiat. Commodo nostrud commodo exercitation minim laboris consequat mollit nisi ea ullamco. 
                            Culpa in do cupidatat amet consequat veniam nostrud incididunt dolor laborum deserunt fugiat eu. Occaecat dolore elit consequat nulla cillum occaecat velit et.
                            Est occaecat reprehenderit ad reprehenderit officia adipisicing id commodo nisi sint irure. Anim dolore aliquip culpa veniam ea nisi reprehenderit consequat 
                            </div><br/>
                <p>Thank you.</p>
           </div>
      </div>    
    </div>
    )

}

export default about; 