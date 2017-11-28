import React from 'react';
import NotPage from '../../components/NotPage';
import { shallow } from 'enzyme';


it('should render the NotFoundPage', () => {
    const wrapper = shallow(<NotPage/>);
    expect(wrapper).toMatchSnapshot(); 
})