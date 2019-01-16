import React,{ Component } from 'react';
import Preview from './Preview';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import { Route } from 'react-router-dom';

class Main extends Component{
constructor(){
  super();
  this.state={
    recipes:[
      {
        id:1,
        name:"Easy Choclate pie",
        ingredients:"ingredients parrt1",
        description:"Choclate pie description"
      },
      {
        id:2,
        name:"Easy Choclate pie2",
        ingredients:"dlkfnd paret2",
        description:"Choclate pie description2"
      }
    ]
  }
}
  showPreview = (id)=>(
      document.getElementById('recipeName').innerHTML = this.state.recipes[id-1].name,
      document.getElementById('ingredients').innerHTML = this.state.recipes[id-1].ingredients,
      document.getElementById('description').innerHTML = this.state.recipes[id-1].description
  )
  render(){
    return(
      <div className="main">
      <Route path="/" render={()=>(
        <React.Fragment>
          <Recipes recipes={ this.state.recipes} showPreview={this.showPreview}/>
          <Preview recipes={ this.state.recipes} />
        </React.Fragment>
      )}/>
      <Route path="/addrecipe" component={AddRecipe} />
      </div>
    )
  }
}

export default Main;
