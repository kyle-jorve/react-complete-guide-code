const redux = require('redux');
const store = redux.createStore(countReducer);

function countReducer(state = { counter: 0 }, action) {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

function countSubscriber() {
    const curState = store.getState();

    console.log(curState);
}

store.subscribe(countSubscriber);
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });