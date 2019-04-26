import React, { Component } from 'react';
import Lottery from "./Lottery";
import "./Ball.css";

class LotteryBall extends React.Component {
    render () {
        return (
                <div className="Ball">{this.props.num}</div>
        )
    }
}

export default LotteryBall;