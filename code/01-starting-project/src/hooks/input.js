import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false
}

function inputReducer(prevState, action) {
    if (action.type === 'BLUR') {
        return {
            value: prevState.value,
            isTouched: true
        }
    }
    if (action.type === 'CHANGE') {
        return {
            value: action.value,
            isTouched: prevState.isTouched
        }
    }
    if (action.type === 'RESET') {
        return {
            value: '',
            isTouched: false
        }
    }

    return initialInputState
}

function useInput(validate) {
    const [inputState, dispatch] = useReducer(inputReducer, initialInputState);
    const valid = validate(inputState.value);
    const invalid = !valid && inputState.isTouched;

    function inputBlurHandler() {
        dispatch({
            type: 'BLUR'
        });
    }

    function inputChangeHandler(event) {
        dispatch({
            type: 'CHANGE',
            value: event.target.value
        });
    }

    function resetInput() {
        dispatch({
            type: 'RESET'
        });
    }

    return {
        value: inputState.value,
        valid,
        invalid,
        inputBlurHandler,
        inputChangeHandler,
        resetInput
    }
}

export default useInput;