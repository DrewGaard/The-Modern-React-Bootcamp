import React, { Component } from "react";

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.one = this.one.bind(this);
        this.tripple = this.tripple.bind(this);
    }
    one() {
        this.setState({score: this.state.score + 1});
    }

    // tripple() {
    //     this.setState(st => {return {score : st.score + 1}});
    // }

    incrementScore(curState) {
        return { score: curState.score + 1 };
    }

    tripple() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.one}>One</button>
                <button onClick={this.tripple}>Tripple</button>
            </div>
        );
    }
}

export default ScoreKeeper;