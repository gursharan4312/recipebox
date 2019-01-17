import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Preview extends Component{

  render(){
    return(
      <div className="previewBox innerContainer">
        <div><h2 id="recipeName">Heading</h2></div>
        <div className="content">
          <div id="ingredients" ></div>
          <div id="direction" style={{marginTop:"1em"}}></div>
        </div>
        <Link to="/addrecipe" className="btn">Add new recipe</Link>
      </div>
    )
  }
}

export default Preview;
