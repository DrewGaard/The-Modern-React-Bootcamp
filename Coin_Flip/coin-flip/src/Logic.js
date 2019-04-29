import React, { Component } from 'react';
import Coin from "./Coin";

class Logic extends Component {
    constructor(props) {
        super(props);
        this.state = {face: "https://tinyurl.com/react-coin-heads-jpg", totalFlips: 0, headFlips: 0, tailFlips: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let rand = Math.floor(Math.random() * 2) + 1;

        if(rand === 1) {
            this.setState({face: "https://tinyurl.com/react-coin-heads-jpg"});
            this.setState({headFlips: this.state.headFlips + 1});
        } else if(rand === 2) {
            this.setState({face: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"});
            this.setState({tailFlips: this.state.tailFlips + 1});
        }

        this.setState({totalFlips: this.state.totalFlips + 1});
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin coin={this.state.face}/>
                <button onClick={this.handleClick}>Flip!</button>
                <p>Out of {this.state.totalFlips} flips, there have been {this.state.headFlips} heads and {this.state.tailFlips} tails.</p>
            </div>
        );
    }
}

export default Logic;