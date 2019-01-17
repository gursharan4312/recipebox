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
              <input type="text" id="name"/><br/><br/>

              <label htmlFor="ingredientInput">Ingredients:</label><br/>
              <textarea id="ingredientInput" rows="3" cols="40" placeholder="*seperate each ingredient with '\':&#10;Milk \ 2 eggs \ salt"></textarea><br/><br />

              <label htmlFor="directionInput">Directions:</label><br/>
              <textarea id="directionInput" rows="5" cols="40" placeholder="* seperate each step with '\': &#10;add milk \&#10;add eggs \&#10;add salt \"></textarea><br/>

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
