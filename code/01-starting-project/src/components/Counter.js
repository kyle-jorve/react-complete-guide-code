import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { countActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.count.count);
  const showCount = useSelector(state => state.count.showCount);
  const dispatch = useDispatch();

  function toggleCounterHandler() {
    dispatch(countActions.toggle());
  }

  function incrementHandler() {
    dispatch(countActions.increment());
  }
  
  function decrementHandler() {
    dispatch(countActions.decrement());
  }

  function valChangeHandler(value) {
    dispatch(countActions.change(value));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        showCount &&
        <React.Fragment> 
          <div className={classes.value}>{counter}</div>

          <div className="button-row">
            <button onClick={() => valChangeHandler(-5)}>- 5</button>
            <button onClick={decrementHandler}>- 1</button>
            <button onClick={incrementHandler}>+ 1</button>
            <button onClick={() => valChangeHandler(5)}>+ 5</button>
          </div>
        </React.Fragment>
      }  

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
