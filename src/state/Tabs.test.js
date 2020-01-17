import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs from './Tabs';

describe('Tabs Component', () => {
    const tabsProps = [
        { name: 'First tab',
          content: 'This is the content of the first tab.'},
        { name: 'Second tab',
          content: 'This is the content of the second tab. There is more writing here than in the first tab.'},
        { name: 'Third tab',
          content: 'This is the content of the third tab. There is more writing her than in the first tab. There is also more writing here than in the second tab.'}
      ]

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the first tab by default', () => {
        const wrapper = shallow(<Tabs tabs={tabsProps} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders empty given no tabs', () => {
        const wrapper = shallow(<Tabs />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('closees the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Tabs tabs={tabsProps} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})