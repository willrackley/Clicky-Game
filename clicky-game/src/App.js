import React, { Component } from 'react';
import ImageCards from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json"
import "./App.css"

let scoreKeeper = [];
let filter;
const addGrayscale = {
  WebkitFilter: 'grayscale(100%)',
  filter: 'grayscale(100%)',
}
let displayNone;
const noDisplay = {
  display: 'none'
}

class App extends Component {

  state = {
    images,
    count: 0,
    topScore: 0,
    clicked: [],
    message: "Click on an image to get started!"
   };

   
  handleClick = (id) => {
    //when we click an image we add the concat the id to the 
    //clicked array and if that id is already there when we concat on the click
    //then we end the game
    if(this.state.clicked.includes(id)){
      filter = addGrayscale;
      displayNone = {};
      const finalCount = scoreKeeper[scoreKeeper.length - 1]
      this.setState({count: 0})
      this.setState({clicked: []})
      this.setState({topScore: finalCount})
      this.setState({message: "GAME OVER | click a gif to play again!"})
      if(finalCount > this.state.topScore){
        this.setState({topScore: finalCount})
      } else {
        this.setState({topScore: this.state.topScore})
      }
      
      console.log(`topScore: ${this.state.topScore}`)
      console.log(`finalCount: ${finalCount}`)
      scoreKeeper = [];
    } else {
      filter = {};
      displayNone = noDisplay;
      this.shuffle(images);
      this.setState({clicked: this.state.clicked.concat([id])})
      this.setState({count: this.state.count + 1});
      this.setState({message: "NICE, good guess!"})
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
        <nav className="navbar">
          <span className="navbar-brand mb-0 h1 mx-auto">Clicky Game</span>
        </nav>

        <div className="container" style={displayNone}>
          <div className="text-center instructions p-4">CLICK ON A GIF TO EARN POINTS, BUT DONT CLICK ON ANY MORE THAN ONCE!</div>
        </div>

        <div className="container gameTextbox">
          <div className="row p-3">
            <div className="col-md-6 gameHeadline">
              <span>{this.state.message}</span>
            </div>
            <div className="col-md-6 text-right score">
              <span>{`Score: ${this.state.count} | Top Score: ${this.state.topScore}`}</span>
            </div>
          </div>
        </div>
        
        <div className="container gifBox bg-white mb-5" style={filter}>
          <div className="card-columns py-3">
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
