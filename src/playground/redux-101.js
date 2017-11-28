import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({ decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const setCount = ({count } = {}) => {
    return {
        type: 'SET',
        count
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            return {
                count: state.count + action.incrementBy
            }
        }
        case 'DECREMENT': {
            return {
                count: state.count - action.decrementBy
            }
        }
        case 'RESET': {
            return {
                count: 0
            }
        }
        default: {
            return state;
        }
    }
}

const store = createStore(countReducer);

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementCount({ decrementBy: 10 }));

console.log(store.getState());

