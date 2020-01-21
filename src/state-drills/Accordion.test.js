import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

describe('Accordion component', () => {
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

    it('renders an empty li when the sections prop is not supplied', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no section as active by default', () => {
        const wrapper = shallow(<Accordion sections={sectionsProps} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sectionsProps} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders only the last section when multiple sections have been clicked', () => {
        const wrapper = shallow(<Accordion sections={sectionsProps} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})