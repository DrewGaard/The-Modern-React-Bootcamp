import React, { Component } from 'react';
import "./Coin.css";

class Coin extends Component {
    render() {
        return (
            <div>
                <img className="Coin" src={this.props.coin} />
            </div>
        );
    }
}

export default Coin;