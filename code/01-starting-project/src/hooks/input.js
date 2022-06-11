import { useState } from 'react';

function useInput(validate) {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const valid = validate(value);
    const hasError = !valid && touched;

    function inputBlurHandler() {
        setTouched(true);
    }

    function inputChangeHandler(event) {
        setValue(event.target.value);
    }

    function resetInput() {
        setValue('');
        setTouched(false);
    }

    return {
        value: value,
        valid,
        hasError,
        inputBlurHandler,
        inputChangeHandler,
        resetInput
    }
}

export default useInput;