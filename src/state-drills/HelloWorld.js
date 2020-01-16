import React from 'react';

export class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {who: 'world'}
    }
    
    handleButtonClick1 = () => {
        this.setState({
            who: 'world'
        })
    }

    handleButtonClick2 = () => {
        this.setState({
            who: 'friend'
        })
    }

    handleButtonClick3 = () => {
        this.setState({
            who: 'react'
        })
    }





    render() {
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleButtonClick1}>World</button>
                <button onClick={this.handleButtonClick2}>Friend</button>
                <button onClick={this.handleButtonClick3}>React</button>
            </div>
        )
    }
}