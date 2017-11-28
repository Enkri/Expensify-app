import filtersReducer from '../../reducers/filters';
import moment from 'moment';

it('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

it('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

it('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

it('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test' });
    expect(state.text).toBe('test');
});

// it('should set start date filter', () => {
//     const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: moment() });
//     expect(state.startDate).toEqual(moment());
// });

// it('should set end date filter', () => {
//     const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: moment() });
//     expect(state.endDate).toEqual(moment());
// });