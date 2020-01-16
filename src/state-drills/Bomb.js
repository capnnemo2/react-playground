import React from 'react';

export class Bomb extends React.Component {
    state = {
        count: 0
    };


    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const { count } = this.state
        if(count >= 8) {
            clearInterval(this.interval)
            return 'BOOOOM!'
        } else if(count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
    }


    render() {
        return(
            <div className='bombCountdown'>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}
