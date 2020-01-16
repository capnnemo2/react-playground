import React from 'react';

export class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false
    };


    handleTriggerPull = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    renderDisplay() {
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if(spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! . . . '
        } else if(chamber === bulletInChamber) {
            return 'BANG!'
        } else if(chamber === null) {
            return ' '
        } else {
            return 'CLICK! Whew, you\'re safe! This time . . . '
        }
    }


    render() {
        return(
            <div>
                <br />
                <button onClick={this.handleTriggerPull}>Pull the trigger</button>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }

}