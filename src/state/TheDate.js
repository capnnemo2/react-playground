import React from 'react';

export class TheDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datetime: new Date() }
    }

    render() {
        return(
            <div>
                {this.state.datetime.toLocaleString()}
            </div>
        )
    }
}