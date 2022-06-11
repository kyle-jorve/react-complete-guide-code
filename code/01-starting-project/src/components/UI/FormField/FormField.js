import styles from './FormField.module.css';

function FormField(props) {
    return (
        <div className={`${styles['form-control']}${props.wrapperClass ? ` ${props.wrapperClass}` : ''}`}>
            <label htmlFor={props.input.id}>{props.label}</label>

            {
                props.input.type === 'select' ?
                <select {...props.input}>
                    {props.options.map((opt, index) => {
                        return <option key={`option${index + 1}`} value={opt.value}>{opt.label}</option>
                    })}
                </select> :

                props.input.type === 'textarea' ?
                <textarea {...props.input} ></textarea> :

                <input {...props.input} />
            }

            {props.hasError && <p className={styles['error-text']}>{props.errorMessage}</p>}
        </div>
    )
}

export default FormField;