import selectExpense from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

it('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result.length).toBe(2);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

it('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

it('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

it('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

it('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});