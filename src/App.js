import React, { Component } from 'react';
import Feedback from './feedback';
import UserFrom from './userform';
import History from './history';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFeedback: "Make Your Guess",
      correctAnswer: Math.floor(Math.random() * 100 + 1),
      guessHistory: [],
      userGuess: ""
    }
  }
  hotorcold = {
    "lessthan10": "HOT",
    "lessthan20": "Warm",
    "morethan50": "COLD"
  }

  feedbackforUser(guess) {
    let diff = Math.abs(this.state.correctAnswer - guess);
    let theanswer;
    if (parseInt(guess) === this.state.correctAnswer) {
      theanswer = "You got it right"
    } else if (diff <= 10) {
      theanswer = "Hot"
    } else if (diff <= 20) {
      theanswer = "Warm"
    } else {
      theanswer = "Cold"
    }
    this.setState({
      userFeedback: theanswer
    })
    this.keepHistory(guess)
  }

  keepHistory(userGuess) {
    const newGuess = userGuess;
    this.setState({
      guessHistory: this.state.guessHistory.concat(newGuess)
    })
  }


  render() {

    return (
      <div className="App">
        <h1>Hot or Cold{this.state.correctAnswer}</h1>
        <section className="game">
          <Feedback feedback={this.state.userFeedback} />
          <UserFrom feedback={guess => this.feedbackforUser(guess)} />
          <History history={this.state.guessHistory} />
        </section>

      </div>
    );
  }
}

export default App;
