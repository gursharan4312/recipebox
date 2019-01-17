import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

class AddRecipe extends Component{
  filterText = (text)=>{
    var arr =[];
    var lastPos=0;
    for(var i=0;i<=text.length;i++){
      if(text.charCodeAt(i)===92||i===text.length){
        arr = [...arr,text.substring(lastPos,i)];
        lastPos = i+1;
      }
    }
    return arr;
  }
onSubmit = (e)=>{
  e.preventDefault();
  var recipe = {
    id:0,
    name:document.getElementById('name').value,
    ingredients:this.filterText(document.getElementById('ingredientInput').value),
    direction:this.filterText(document.getElementById('directionInput').value)
  }
  this.props.addRecipe(recipe);
}
  render(){
    return(
      <div className="modal">
      <div className="modalContainer">
        <div className="modalHeader">
            <h3 style={{color:"#218F76",fontWeight:"bolder",margin:"10px"}}>Add a Repice</h3>
        </div>
          <div className="modalBody">
            <form onSubmit={this.onSubmit}>
              <label htmlFor="name">Name of recipe:</label><br/>
              <input type="text" id="name" style={{width:"90%"}}/><br/><br/>

              <label htmlFor="ingredientInput">Ingredients:</label><br/>
              <textarea id="ingredientInput" rows="3" cols="40" style={{width:"90%"}} placeholder="*seperate each ingredient with '\':&#10;Milk \ 2 eggs \ salt"></textarea><br/><br />

              <label htmlFor="directionInput">Directions:</label><br/>
              <textarea id="directionInput" rows="5" cols="40" style={{width:"90%"}} placeholder="* seperate each step with '\':&#10;add milk \ &#10;add eggs \&#10;add salt \ "></textarea><br/>
              <input className="btn" type="submit" value="Add"/>
              <Link to="/" className="btn">Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddRecipe;
