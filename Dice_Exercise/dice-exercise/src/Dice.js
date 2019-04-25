import React, { Component } from 'react';
import "./Dice.css";

class Dice extends React.Component {
    render () {
        return (
            <div>
                <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling ? "shaking" : ""}`}></i>
            </div>
        )
    }
}

export default Dice;