import React from 'react';

import styles from './FormField.module.css';

const FormField = React.forwardRef((props, ref) => {
    return (
        <div className={`${styles['form-control']}${props.className ? ` ${props.className}` : ''}`}>
            <label htmlFor={props.input.id}>{props.label}</label>

            {
                props.input.type === 'select' ?
                <select
                    ref={ref}
                    {...props.input}
                >
                    {props.options.map((opt, index) => {
                        return <option key={`option${index + 1}`} value={opt.value}>{opt.label}</option>
                    })}
                </select> :

                props.input.type === 'textarea' ?
                <textarea
                    ref={ref}
                    {...props.input}
                ></textarea> :

                <input
                    ref={ref}
                    {...props.input}
                />
            }
        </div>
    )
});

export default FormField;