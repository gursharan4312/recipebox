import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

class AddRecipe extends Component{

  render(){
    return(
      <div className="modal">
      <div className="modalContainer">
        <div className="modalHeader">
            <h3>Add New Repice</h3>
        </div>
          <div className="modalBody">
            <form>
              <label htmlFor="name">Name of recipe:</label><br/>
              <input type="text" id="name"/><br/>
              <label htmlFor="ingredientInput">Ingredients:</label><br/>
              <textarea id="ingredientInput"></textarea><br/>
              <label htmlFor="directionInput">Directions:</label><br/>
              <textarea id="directionInput"></textarea><br/>
              <input className="btn" type="submit" value="Add" style={{}}/>
              <Link to="/" className="btn">Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddRecipe;
