import React, { useRef, useImperativeHandle } from 'react';

import styles from './FormField.module.css';

const FormField = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    function focusInput() {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => ({ focus: focusInput }));

    return (
        <div className={`${styles.control}${props.valid === false ? ` ${styles.invalid}` : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>

            {
                props.type === 'select' ?
                <select
                    ref={inputRef}
                    value={props.value}
                    id={props.id}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                >
                    {props.options.map((opt, index) => {
                        return <option key={`option${index + 1}`} value={opt.value}>{opt.label}</option>
                    })}
                </select> :

                props.type === 'textarea' ?
                <textarea
                    ref={inputRef}
                    value={props.value}
                    id={props.id}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                ></textarea> :

                <input
                    ref={inputRef}
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            }
        </div>
    )
});

export default FormField;