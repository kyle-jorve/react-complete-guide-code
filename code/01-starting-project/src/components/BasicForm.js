import useInput from "../hooks/input";

const BasicForm = (props) => {
  const {
    value: fNameValue,
    valid: fNameValid,
    invalid: fNameInvalid,
    inputBlurHandler: fNameBlurHandler,
    inputChangeHandler: fNameChangeHandler,
    resetInput: resetFName
  } = useInput(val => val.trim().length > 0);
  const {
    value: lNameValue,
    valid: lNameValid,
    invalid: lNameInvalid,
    inputBlurHandler: lNameBlurHandler,
    inputChangeHandler: lNameChangeHandler,
    resetInput: resetLName
  } = useInput(val => val.trim().length > 0);
  const {
    value: emailValue,
    valid: emailValid,
    invalid: emailInvalid,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    resetInput: resetEmail
  } = useInput(val => val.includes('@'));
  const formValid = fNameValid && lNameValid && emailValid;

  function formSubmitHandler(event) {
    event.preventDefault();

    if (!formValid) return;

    console.log(fNameValue, lNameValue, emailValue);

    resetFName();
    resetLName();
    resetEmail();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={`form-control${fNameInvalid ? ' invalid' : ''}`}>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' value={fNameValue} onBlur={fNameBlurHandler} onChange={fNameChangeHandler} />
          {fNameInvalid && <p className="error-text">Please enter a first name</p>}
        </div>
        <div className={`form-control${lNameInvalid ? ' invalid' : ''}`}>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' value={lNameValue} onBlur={lNameBlurHandler} onChange={lNameChangeHandler} />
          {lNameInvalid && <p className="error-text">Please enter a last name</p>}
        </div>
      </div>
      <div className={`form-control${emailInvalid ? ' invalid' : ''}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' value={emailValue} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
        {emailInvalid && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
