import React, { Component } from 'react';
import ImageCards from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json"

class App extends Component {

  state = {
    images
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
        <div className="container">
          <div className="card-columns">
            {this.state.images.map(images => (
              <ImageCards
                id={images.id}
                key={images.id}
                desc={images.desc}
                src={images.src}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
