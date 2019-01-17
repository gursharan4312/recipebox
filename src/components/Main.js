import React,{ Component } from 'react';
import { Route } from 'react-router-dom';

import Preview from './Preview';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import Header from './layout/Header';
import Footer from './layout/Footer';

class Main extends Component{
constructor(){
  super();
  this.state={
    recipes:[
      {
        id:1,
        name:"Easy Choclate pie",
        ingredients:["first I1","second I1",'third I1'],
        description:["first D1","second D1",'third D1']
      },
      {
        id:2,
        name:"Easy Choclate pie2",
        ingredients:["first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third'],
        description:["first","second",'third']
      }
    ]
  }
}

  displayIngredients = (id)=>{
    var list="<h3>Ingredients</h3>";
    var array = this.state.recipes[id-1].ingredients;
    array.map((l)=>(list += "<li>"+l+"</li>"))
    document.getElementById('ingredients').innerHTML = list;
  }

  displayDescription = (id)=>{
    var list="<h3>Description</h3>";
    var array = this.state.recipes[id-1].description;
    array.map((l)=>(list += "<li>"+l+"</li>"))
    document.getElementById('description').innerHTML = list;
  }

  showPreview = (id)=>(
      document.getElementById('recipeName').innerHTML = this.state.recipes[id-1].name,
      this.displayIngredients(id),
      this.displayDescription(id)
  )
  render(){
    return(
      <div className="main">
      <Header />
      <Route path="/" render={()=>(
        <React.Fragment>
          <Recipes recipes={ this.state.recipes} showPreview={this.showPreview}/>
          <Preview recipes={ this.state.recipes} />
        </React.Fragment>
      )}/>
      <Route path="/addrecipe" component={AddRecipe} />
      <Footer />
      </div>
    )
  }
}

export default Main;
