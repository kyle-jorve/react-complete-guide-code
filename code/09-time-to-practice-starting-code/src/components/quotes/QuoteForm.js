import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [formFilled, setFormFilled] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    setFormFilled(false);

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  function formFilledHandler(event) {
    if (event.target.value.trim().length) {
      setFormFilled(true);

      return;
    }
    
    if (authorInputRef.current.value.trim().length === 0 && textInputRef.current.value.trim().length === 0) {
      setFormFilled(false);
    }
  }

  return (
    <Fragment>
      <Prompt when={formFilled} message={location => 'Are you sure you want to leave? The form will be reset.'} />

      <Card>
        <form onSubmit={submitFormHandler} className={classes.form}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} onChange={formFilledHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef} onChange={formFilledHandler}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={() => setFormFilled(false)} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
