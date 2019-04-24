import React, { Component } from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 1};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({number: rand});
    }
    render() {
        let display;
        if(this.state.number === 7) {
            display = <h1>YOU WIN!</h1>;
        } else {
            display = <button onClick={this.handleClick}>Click Me!</button>;
        }
        return (
            <div>
                <h1>Number is: {this.state.number}</h1>
                {display}
            </div>
        )
    }
}

export default Click;