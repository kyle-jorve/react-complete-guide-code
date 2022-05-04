import React, { useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import FormField from '../UI/FormField/FormField';
import AuthContext from '../../context/auth-context';

const initInputState = {
	value: '',
	valid: null,
};

function emailReducer(state, action) {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.value,
			valid: action.value.includes('@'),
		};
	}

	if (action.type === 'INPUT_BLUR') {
		return {
			value: state.value,
			valid: state.value.includes('@'),
		};
	}

	return initInputState;
}

function passwordReducer(state, action) {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.value,
			valid: action.value.length >= 7,
		};
	}

	if (action.type === 'INPUT_BLUR') {
		return {
			value: state.value,
			valid: state.value.length >= 7,
		};
	}

	return initInputState;
}

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [emailState, dispatchEmail] = useReducer(
		emailReducer,
		initInputState
	);
	const [passwordState, dispatchPassword] = useReducer(
		passwordReducer,
		initInputState
	);
	const authContext = useContext(AuthContext);
	const formFields = [
		{
			ref: emailRef,
			valid: emailState.valid,
			label: 'E-Mail',
			type: 'email',
			id: 'email',
			value: emailState.value,
			onChange: emailChangeHandler,
			onBlur: validateEmailHandler,
		},
		{
			ref: passwordRef,
			valid: passwordState.valid,
			label: 'Password',
			type: 'password',
			id: 'password',
			value: passwordState.value,
			onChange: passwordChangeHandler,
			onBlur: validatePasswordHandler,
		},
	];

	function emailChangeHandler(event) {
		dispatchEmail({
			type: 'USER_INPUT',
			value: event.target.value,
		});
	};

	function passwordChangeHandler(event) {
		dispatchPassword({
			type: 'USER_INPUT',
			value: event.target.value,
		});
	};

	function validateEmailHandler() {
		dispatchEmail({
			type: 'INPUT_BLUR',
		});
	};

	function validatePasswordHandler() {
		dispatchPassword({
			type: 'INPUT_BLUR',
		});
	};

	function submitHandler(event) {
		event.preventDefault();

		if (emailState.valid && passwordState.valid) {
			authContext.onLogin(emailState.value, passwordState.value);
		}
		else if (!emailState.valid) {
			emailRef.current.focus();
		}
		else if (!passwordState.valid) {
			passwordRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				{formFields.map(f => {
					return (
						<FormField
							ref={f.ref}
							key={f.id}
							valid={f.valid}
							label={f.label}
							type={f.type}
							id={f.id}
							value={f.value}
							onChange={f.onChange}
							onBlur={f.onBlur}
						/>
					);
				})}

				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
