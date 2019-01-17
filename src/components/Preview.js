import React,{ Component } from 'react';

class Preview extends Component{

  render(){
    return(
      <div className="previewBox innerContainer">
        <div><h2 id="recipeName"></h2></div>
        <div className="content">
          <div id="ingredients" ></div>
          <div id="description" style={{marginTop:"1em"}}></div>
        </div>
      </div>
    )
  }
}

export default Preview;
