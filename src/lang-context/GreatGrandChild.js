import React from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './LanguageContext';

export default class GreatGrandChild extends React.Component {
    static contextType = LanguageContext;
    render() {
        const copy = languageSpecificCopy[this.context.lang] || {}
        return (
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button
                    onClick={() => this.context.setLang('italian')}>
                    Italian{'   '}
                    <span role='img' aria-label='italian'>🇮🇹</span>
                </button>
            </section>
        )
    }
}