import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';
import moment from 'moment';

it('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual(
        {
            type: 'SET_START_DATE',
            date: moment(0)
        } 
    );
    
});

it('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual(
        {
            type: 'SET_END_DATE',
            date: moment(0)
        } 
    );
});

it('should generate sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual(
        {
            type: 'SORT_BY_DATE'
        }
    );
});

it('should generate sort by amount object', () => {
    const action = sortByAmount();
    expect(action).toEqual(
        {
            type: 'SORT_BY_AMOUNT'
        }
    );
});

it('should generate set text object with arguemnts', () => {
    const action = setTextFilter('test');
    expect(action).toEqual(
        {
            type: 'SET_TEXT_FILTER',
            text: 'test'
        }
    );
});

it('should generate set text object without arguemtns', () => {
    const action = setTextFilter();
    expect(action).toEqual(
        {
            type: 'SET_TEXT_FILTER',
            text: ''
        }
    );
});