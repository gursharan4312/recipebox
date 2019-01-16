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
        description:"Choclate pie description"
      },
      {
        id:2,
        name:"Easy Choclate pie2",
        description:"Choclate pie description2"
      }
    ]
  }
}
  render(){
    return(
      <div className="main">
      <Route path="/" render={()=>(
        <React.Fragment>
          <Recipes recipes={ this.state.recipes} />
          <Preview recipes={ this.state.recipes} />
        </React.Fragment>
      )}/>
      <Route path="/addrecipe" component={AddRecipe} />
      </div>
    )
  }
}

export default Main;
