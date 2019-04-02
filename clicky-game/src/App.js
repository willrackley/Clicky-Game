import React, { Component } from 'react';
import ImageCards from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json"
let scoreKeeper = [];

class App extends Component {

  state = {
    images,
    count: 0,
    topScore: 0,
    clicked: [],
    message: "click on an image to get started"
   };

   
  handleClick = (id) => {
    //when we click an image we add the concat the id to the 
    //clicked array and if that id is already there when we concat on the click
    //then we end the game
    if(this.state.clicked.includes(id)){
      const finalCount = scoreKeeper[scoreKeeper.length - 1]
      this.setState({count: 0})
      this.setState({clicked: []})
      this.setState({topScore: finalCount})
      this.setState({message: "GAME OVER, click a gif to play again!"})
      if(finalCount > this.state.topScore){
        this.setState({topScore: this.state.count})
      }
      scoreKeeper = [];
    } else {
      this.shuffle(images);
      this.setState({clicked: this.state.clicked.concat([id])})
      this.setState({count: this.state.count + 1});
      this.setState({message: "Nice, choose another gif!"})
      scoreKeeper.push(this.state.count + 1);
    }  
  }

  //use the Fisher-Yates shuffle algorithm
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  render() {
    return (
      <Wrapper>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1 mx-auto">Clicky Game</span>
        </nav>
        <div className="container">
          <div className="row text-center p-3">
            <div className="col-md-6">
              <span>{this.state.message}</span>
            </div>
            <div className="col-md-6">
              <span>{`Score: ${this.state.count} | Top Score: ${this.state.topScore}`}</span>
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
                handleClick={this.handleClick}
              />
            ))}
          </div>
        
        </div>
      </Wrapper>
    );
  }
}

export default App;
