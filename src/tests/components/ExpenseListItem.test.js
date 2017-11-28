import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

it('should render ExpenseListItem with the expense item', () => {
    const wrapper = shallow((<ExpenseListItem expense={expenses[0]}/>));
    expect(wrapper).toMatchSnapshot();
});