import React, { Component } from 'react';
//import ImageCards from "./components/ImageCards";
import Wrapper from "./components/Wrapper";

class App extends Component {

  state = {
    images: []
   };

  render() {
    return (
      <Wrapper>
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1 mx-auto">Clicky Game</span>
        </nav>
        <div className="container">
          <div className="row text-center p-3">
            <div className="col-md-6">
              <span>click on an image to get started</span>
            </div>
            <div className="col-md-6">
              <span>score: 0 | Top Score: 0</span>
            </div>
          </div>
        </div>
        <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://media.giphy.com/media/yMN6JhJDWwygo/giphy.gif" className="card-img-top" alt="family-guy"/>
          
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
