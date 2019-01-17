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
        direction:["first D1","second D1",'third D1']
      },
      {
        id:2,
        name:"Easy Choclate pie2",
        ingredients:["first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third',"first","second",'third'],
        direction:["first","second",'third']
      }
    ]
  }
}

  displayIngredients = (id)=>{
    var list="<h3>Ingredients:</h3>";
    var array = this.state.recipes[id-1].ingredients;
    array.map((l)=>(list += "<li>"+l+"</li>"))
    document.getElementById('ingredients').innerHTML = list;
  }

  displaydirection = (id)=>{
    var list="<h3>Directions:</h3>";
    var array = this.state.recipes[id-1].direction;
    array.map((l)=>(list += "<li>"+l+"</li>"))
    document.getElementById('direction').innerHTML = list;
  }

  showPreview = (id)=>(
      document.getElementById('recipeName').innerHTML = this.state.recipes[id-1].name,
      this.displayIngredients(id),
      this.displaydirection(id)
  )
  componentDidMount(){
    this.showPreview(1);
  }

  render(){
    return(
      <div className="container">
      <div className="main">
      <Header />
      <Route path="/" render={()=>(
        <React.Fragment>
          <Recipes recipes={ this.state.recipes} showPreview={this.showPreview}/>
          <Preview recipes={ this.state.recipes}/>
        </React.Fragment>
      )}/>
      </div>
      <Route path="/addrecipe" component={AddRecipe} />
      <Footer />
      </div>
    )
  }
}

export default Main;
