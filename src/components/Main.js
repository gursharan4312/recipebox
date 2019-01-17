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
        name:"Garlic Chicken",
        ingredients:["3 tablespoons butter","1 teaspoon seasoning salt","1 teaspoon onion powder","4 skinless, boneless chicken breast halves","2 teaspoons garlic powder"],
        direction:["Melt butter in a large skillet over medium high heat.","Add chicken and sprinkle with garlic powder, seasoning salt and onion powder.","Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear."]
      },
      {
        id:2,
        name:"Easy Choclate Pie",
        ingredients:["1 (12 ounce) can evaporated milk","1 (5.9 ounce) package chocolate instant pudding mix","1 (6.5 ounce) can whipped cream","1/2 cup miniature semi-sweet chocolate chips (optional)","1 (9 inch) graham cracker pie crust","Another can of whipped cream for garnish (optional)"],
        direction:["Pour milk into medium bowl. Add dry pudding mix; beat with wire whisk until well blended and mixture just begins to thicken. Stir in half of the chocolate chips.","Add contents of whipped cream can; stir gently but quickly until well blended. Pour into crust; cover.","Refrigerate 6 hours, or until set. Cut into 8 slices to serve. Garnish with additional whipped cream and remaining chocolate chips, if desired."]
      },{
        id:3,
        name:"Line Chicken Tacos",
        ingredients:["11/2 pounds skinless, boneless chicken breast meat - cubed","1/8 cup red wine vinegar","1/2 lime, juiced","1 teaspoon white sugar","1/2 teaspoon salt","1/2 teaspoon ground black pepper","2 green onions, chopped","2 cloves garlic, minced","1 teaspoon dried oregano","10 (6 inch) corn tortillas","1 tomato, diced","1/4 cup shredded lettuce","1/4 cup shredded Monterey Jack cheese","1/4 cup salsa"],
        direction:["Saute chicken in a medium saucepan over medium high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, green onion, garlic and oregano. Simmer for an extra 10 minutes.","Heat an iron skillet over medium heat. Place a tortilla in the pan, warm, and turn over to heat the other side. Repeat with remaining tortillas. Serve lime chicken mixture in warm tortillas topped with tomato, lettuce, cheese and salsa."]
      },
      {
        id:4,
        name:"Artichoke Dip",
        ingredients:["1 8oz package soft cream cheese","4oz mayonnaise","4oz sour cream","1/4 Cup Fresh Grated Parmesan Cheese","1/4 Cup Fresh Grated Romano Cheese","2 eggs","3/4 Cup dairy sour cream","1 16oz can artichoke hearts","1/4 Cup fresh chopped chives","1 tbs fresh minced garlic"],
        direction:["Soften the cream cheese before mixing.","Rinse well, then dice the artichokes into small ½” size pieces.","Into a mixing bowl place the softened cream cheese. Mix in the mayonnaise, sour cream, the Parmesan and Romano cheese, artichokes and garlic.","When the mixture is fairly well blended, spoon into a 9” round glass pie dish.","Set Oven to Bake at 350 degrees.","Place un-covered dish into oven for 20 – 25 minutes until the edges appear slightly golden and mixture is bubbling at the edge.","Remove and sprinkle chopped chives on top and let cool about 5 minutes before serving.","Enjoy!"]
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

  showPreview = (id)=>{
      document.getElementById('recipeName').innerHTML = this.state.recipes[id-1].name;
      this.displayIngredients(id);
      this.displaydirection(id)
  }

  addRecipe = (recipe)=>{
      console.log(recipe);
      recipe.id = this.state.recipes.length+1;

      this.setState({recipes:[...this.state.recipes,recipe]});
  }

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
      <Route path="/addrecipe" render={(props)=>(<AddRecipe addRecipe={this.addRecipe} />)} />
      <Footer />
      </div>
    )
  }

}

export default Main;
