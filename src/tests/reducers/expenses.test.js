import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

it('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

it('should remove expense by id', () => {
    const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '1' });
    expect(result).toEqual([expenses[1], expenses[2]]);
});

it('should not remove expense if id not found', () => {
    const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});

it('should add expense', () => {
    const expense = {
        desctiption: 'test',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const result = expensesReducer([], action);
    expect(result).toEqual([expense]);
});

it('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            amount: 1950
        }
    };
    const result = expensesReducer(expenses, action);
    expect(result[0].amount).toBe(1950);
});

it('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 1950
        }
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});