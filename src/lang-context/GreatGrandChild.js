import React from 'react';
import languageSpecificCopy from './languageSpecificCopy';

export default class GreatGrandChild extends React.Component {
    render() {
        const copy = languageSpecificCopy['en-US'] || {}
        return (
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
            </section>
        )
    }
}