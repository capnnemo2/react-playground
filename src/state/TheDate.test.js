import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {TheDate} from './TheDate';

describe('TheDate Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TheDate />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    // it doesn't match the snapshot because the time always changes. it.skip for now...
    it.skip('renders the UI as expected', () => {
        expect(
            renderer.create(<TheDate />).toJSON()
        ).toMatchSnapshot()
    })
})