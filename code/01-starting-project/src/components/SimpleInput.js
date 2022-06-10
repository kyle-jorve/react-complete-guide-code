import useInput from '../hooks/input';

const SimpleInput = (props) => {
  const {
      value: name,
      valid: nameValid,
      invalid: nameInvalid,
      inputChangeHandler: nameChangeHandler,
      inputBlurHandler: nameBlurHandler,
      resetInput: resetName
    } = useInput(val => val.trim().length > 0);
  const {
      value: email,
      valid: emailValid,
      invalid: emailInvalid,
      inputChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      resetInput: resetEmail
    } = useInput(val => val.includes('@'));
  let formValid = nameValid && emailValid;

  function formSubmitHandler(event) {
    event.preventDefault();

    if (!nameValid || !emailValid) return;

    console.log(name, email);

    resetName();
    resetEmail();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control${nameInvalid ? ' invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={`form-control${emailInvalid ? ' invalid' : ''}`}>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInvalid && <p className="error-text">Please enter a valid email address</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
