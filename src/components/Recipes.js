import React,{ Component } from 'react';
import RecipesSelector from './RecipesSelector';

class Recipes extends Component{
  render(){
    return(
      <div className="recipeBox innerContainer" >
      <ul>
      {
        this.props.recipes.map((recipe)=>(
          <RecipesSelector recipe={recipe.name} key={recipe.id}/>
        ))
      }
      </ul>
      </div>
    )
  }
}

export default Recipes;
