import React,{ Component } from 'react';

class RecipesSelector extends Component{
  render(){
    const { id,name } = this.props.recipe;
    return (
      <li onClick={this.props.showPreview.bind(this,id)}>{name}</li>
    )
  }
}
export default RecipesSelector;
