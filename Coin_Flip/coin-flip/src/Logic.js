import React, { Component } from 'react';
import Coin from "./Coin";
import { choice } from "./helpers";

class Logic extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            { side: "tails", imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"}
        ]
    };
    constructor(props) {
        super(props);
        this.state = {curCoin: null, face: "https://tinyurl.com/react-coin-heads-jpg", totalFlips: 0, headFlips: 0, tailFlips: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {

        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                totalFlips: st.totalFlips + 1,
                headFlips: st.headFlips + (newCoin.side === "heads" ? 1 : 0),
                tailFlips: st.tailFlips + (newCoin.side === "tails" ? 1 : 0)
            };
        });

        // let rand = Math.floor(Math.random() * 2) + 1;

        // if(rand === 1) {
        //     this.setState({face: "https://tinyurl.com/react-coin-heads-jpg"});
        //     this.setState({headFlips: this.state.headFlips + 1});
        // } else if(rand === 2) {
        //     this.setState({face: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"});
        //     this.setState({tailFlips: this.state.tailFlips + 1});
        // }

        // this.setState({totalFlips: this.state.totalFlips + 1});
    }
    render() {
        return (
            <div>
                <h1>Let's Flip A Coin!</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip!</button>
                <p>Out of {this.state.totalFlips} flips, there have been {this.state.headFlips} heads and {this.state.tailFlips} tails.</p>
            </div>
        );
    }
}

export default Logic;