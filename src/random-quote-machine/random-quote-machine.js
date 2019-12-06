import React from 'react';
//import logo from './logo.svg';
import './random-quote-machine.css';



const quoteText = [
  "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
  "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
  "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
  "If you want to lift yourself up, lift up someone else.",
  "I attribute my success to this: I never gave or took any excuse.",
  "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
  "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
  "Change your thoughts and you change your world."
];

const quoteAuthor = [
  "Erica Jong",
  "Unknown",
  "Oprah Winfrey",
  "Booker T. Washington",
  "Florence Nightingale",
  "Jesse Owens",
  "Vincent Van Gogh",
  "Norman Vincent Peale"
];

const color = ["one", "two", "three"];
const paraColor = ["text-one", "text-two", "text-three"];

class Quote extends React.Component {
/*   constructor(props) {
      super(props);
  } */

  render() {
      
      return (
          <div>
            <p id="text" className={"text-center col-xs-12 col-md-12 " + paraColor[this.props.index.colorIndex]}>"{quoteText[this.props.index.randomIndex]}</p>
            <p id="author" className={"text-right col-xs-12 col-md-12 " + paraColor[this.props.index.colorIndex]}>--{quoteAuthor[this.props.index.randomIndex]}</p>

            <p id="tweet" className={"col-xs-12 col-md-2 " + color[this.props.index.colorIndex] + " text-center"}><a id="tweet-quote" href="#twitter.com/intent/tweet" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i>tweet it</a></p>

            <p id="button" className="col-xs-12 col-md-3 col-md-offset-7"><button id="new-quote" className={color[this.props.index.colorIndex]}  onClick={this.props.handleChange}>New quote</button></p>

          </div>
      );
  }
}

class RandomQuoteMachine extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          randomIndex: 0,
          colorIndex: 0
      };
      this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
      this.setState({
          randomIndex: Math.floor(Math.random() * 8),
          colorIndex: Math.floor(Math.random() * 3)
      });
  }

  render() {
      return (
          <div id="app-container" className={"row " + color[this.state.colorIndex]}>
              <div id="quote-box" className="col-xs-9 col-md-6 col-md-offset-3 row well ">
                  <Quote index={this.state} handleChange={this.newQuote}/>
              </div>
          </div>
      );
  }
}

export default RandomQuoteMachine;
