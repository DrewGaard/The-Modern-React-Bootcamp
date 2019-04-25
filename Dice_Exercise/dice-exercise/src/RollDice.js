import React, { Component } from 'react';
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = {die1: "one", die2: "one", rolling: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let rand1 = Math.floor(Math.random() * this.props.sides.length);
        let rand2 = Math.floor(Math.random() * this.props.sides.length);
        
        this.setState({die1: this.props.sides[rand1], rolling: true});
        this.setState({die2: this.props.sides[rand2], rolling: true});
        
        //Wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000);
    }
    render() {
        return (
            <div className='RollDice'>
                <div className="RollDice-container">
                    <Dice face={this.state.die1} rolling={this.state.rolling} />
                    <Dice face={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.handleClick} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        );
    }
}

export default RollDice; 