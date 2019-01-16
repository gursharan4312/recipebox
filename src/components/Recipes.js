import React,{ Component } from 'react';
import RecipesSelector from './RecipesSelector';

class Recipes extends Component{
  render(){
    return(
      <div className="recipeBox innerContainer" >
      <ul>
      {
        this.props.recipes.map((recipe)=>(
          <RecipesSelector recipe={recipe} key={recipe.id} showPreview={this.props.showPreview}/>
        ))
      }
      </ul>
      </div>
    )
  }
}

export default Recipes;
