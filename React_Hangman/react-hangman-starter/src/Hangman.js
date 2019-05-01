import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from "./words.js";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  handleClick(e) {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord()});
  }


  game() {

    const altText = `${this.state.nWrong}/${this.props.maxWrong} guesses`;

    if(this.state.nWrong >= this.props.maxWrong){
      return <div> 
            <img src={this.props.images[this.state.nWrong]} alt={altText} />
            <p className='Numner-Wrong'>Wrong Guesses: {this.state.nWrong}</p>
            <p className='Answer'>Game Over. The Correct Answer Is: {this.state.answer}</p>
            </div>
    } else if(this.guessedWord().join("") === this.state.answer) {
      return <div> 
            <img src={this.props.images[this.state.nWrong]} alt="You Win!" />
            <p className='Answer'>You Win!</p>
            </div>
    } else {
      return <div> 
            <img src={this.props.images[this.state.nWrong]} alt={altText} />
            <p className='Numner-Wrong'>Wrong Guesses: {this.state.nWrong}</p>
            <p className='Hangman-word'>{this.guessedWord()}</p>
            <p className='Hangman-btns'>{this.generateButtons()}</p>
            </div>
    }
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <div>{this.game()}</div>
        <button id="reset" onClick={this.handleClick}>Restart</button>
      </div>
    );
  }
}

export default Hangman;
