import React,{ Component } from 'react';

class RecipesSelector extends Component{
  render(){
    return (

      <li>{this.props.recipe}</li>
    )
  }
}
export default RecipesSelector;
