import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';


it('should render header crectly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});