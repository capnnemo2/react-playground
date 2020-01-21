import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

descibe('Accordion component', () => {
    const sectionsProps = [
        { title: 'Ice Cream',
            content: 'There is an almost infinite variety of ice cream flavors, but there are only really a handful of flavors that matter. King among those select few is Chocolate Chip Cookie Dough.'},
        { title: 'Popsicles',
            content: 'Popsicles seem to be most popular with younger humans. They are a perfect treat for a hot summer day, although they can be a bit messy.'},
        { title: 'Tater Tots',
            content: 'An unconventional dessert choice, tater tots provide steamy potato bits and an opportunity to eat ketchup, barbeque sauce, or the hot sauce of your choosing.'}
    ]

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })    

})