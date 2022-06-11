import React, { useContext, useRef, useState } from 'react';

import useFetchData from '../../hooks/fetch-data';
import useInput from '../../hooks/input';

import styles from './Checkout.module.css';
import lightboxStyles from '../UI/Modal/Modal.module.css';
import formStyles from '../UI/FormField/FormField.module.css';
import buttonStyles from '../UI/Button/Button.module.css';
import FormField from '../UI/FormField/FormField';
import CartContext from '../../context/cart-context';

function Checkout() {
    const context = useContext(CartContext);
    const fetchData = useFetchData(true);
    const {
        value: nameValue,
        valid: nameValid,
        hasError: nameHasError,
        inputBlurHandler: nameBlurHandler,
        inputChangeHandler: nameChangeHandler,
        resetInput: resetName
    } = useInput(val => val.trim().length > 0);
    const {
        value: addressValue,
        valid: addressValid,
        hasError: addressHasError,
        inputBlurHandler: addressBlurHandler,
        inputChangeHandler: addressChangeHandler,
        resetInput: resetAddress
    } = useInput(val => val.trim().length > 0);
    const {
        value: cityValue,
        valid: cityValid,
        hasError: cityHasError,
        inputBlurHandler: cityBlurHandler,
        inputChangeHandler: cityChangeHandler,
        resetInput: resetCity
    } = useInput(val => val.trim().length > 0);
    const {
        value: stateValue,
        valid: stateValid,
        hasError: stateHasError,
        inputBlurHandler: stateBlurHandler,
        inputChangeHandler: stateChangeHandler,
        resetInput: resetState
    } = useInput(val => val.trim().length > 0);
    const {
        value: zipValue,
        valid: zipValid,
        hasError: zipHasError,
        inputBlurHandler: zipBlurHandler,
        inputChangeHandler: zipChangeHandler,
        resetInput: resetZip
    } = useInput(val => val.trim().length > 0);
    const {
        value: emailValue,
        valid: emailValid,
        hasError: emailHasError,
        inputBlurHandler: emailBlurHandler,
        inputChangeHandler: emailChangeHandler,
        resetInput: resetEmail
    } = useInput(val => val.includes('@'));
    const {
        value: cardValue,
        valid: cardValid,
        hasError: cardHasError,
        inputBlurHandler: cardBlurHandler,
        inputChangeHandler: cardChangeHandler,
        resetInput: resetCard
    } = useInput(val => val.trim().length > 0);
    const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
    const formRef = useRef();
    const formValid = nameValid && emailValid && cardValid && addressValid && cityValid && stateValid && zipValid;

    function resetForm() {
        resetName();
        resetEmail();
        resetCard();
        resetAddress();
        resetCity();
        resetState();
        resetZip();

        formRef.current.blur();
    }

    function formSubmitHandler(event) {
        let order;

        event.preventDefault();

        if (!formValid) return;

        order = {
            name: nameValue,
            location: {
                address: addressValue,
                city: cityValue,
                state: stateValue,
                zip: zipValue
            },
            email: emailValue,
            card: cardValue,
            items: context.selectedMeals
        };

        // submit order to server
        fetchData({
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        resetForm();

        setFormSubmitSuccessful(true);

        context.setSelectedMeals([]);
    }

    function cancelCheckoutHandler() {
        resetForm();

        context.closeCheckout();
    }

    return (
        <form className={lightboxStyles['lightbox__box']} onSubmit={formSubmitHandler} ref={formRef}>
            <div className={`${styles.checkout} ${lightboxStyles['lightbox__inner']}`}>
                <h2>Checkout</h2>

                {
                    formSubmitSuccessful &&
                    <p>Your order has been submitted successfully. Enjoy your disgusting meal you fat, sweaty pig.</p>
                }

                {
                    !formSubmitSuccessful &&
                    <React.Fragment>
                        <FormField
                            wrapperClass={nameHasError ? formStyles['form-control--invalid'] : ''}
                            label='Name'
                            hasError={nameHasError}
                            errorMessage='Please enter a name'
                            input={{
                                className: formStyles['input--large'],
                                type: "text",
                                id: "name",
                                value: nameValue,
                                onBlur: nameBlurHandler,
                                onChange: nameChangeHandler
                            }}
                        />
                        
                        <FormField
                            wrapperClass={emailHasError ? formStyles['form-control--invalid'] : ''}
                            label='Email'
                            hasError={emailHasError}
                            errorMessage='Please enter a valid email'
                            input={{
                                className: formStyles['input--large'],
                                type: "email",
                                id: "email",
                                value: emailValue,
                                onBlur: emailBlurHandler,
                                onChange: emailChangeHandler
                            }}
                        />
                        
                        <FormField
                            wrapperClass={cardHasError ? formStyles['form-control--invalid'] : ''}
                            label='Credit Card'
                            hasError={cardHasError}
                            errorMessage='Please enter a credit card number'
                            input={{
                                className: formStyles['input--large'],
                                type:"text",
                                id:"card",
                                value: cardValue,
                                onBlur: cardBlurHandler,
                                onChange: cardChangeHandler
                            }}
                        />

                        <hr/>

                        <FormField
                            wrapperClass={addressHasError ? formStyles['form-control--invalid'] : ''}
                            label='Address'
                            hasError={addressHasError}
                            errorMessage='Please enter an address'
                            input={{
                                className: formStyles['input--large'],
                                type:"text",
                                id:"address",
                                value: addressValue,
                                onBlur: addressBlurHandler,
                                onChange: addressChangeHandler
                            }}
                        />

                        <div className={formStyles['form__row']}>
                            <FormField
                                wrapperClass={cityHasError ? formStyles['form-control--invalid'] : ''}
                                label='City'
                                hasError={cityHasError}
                                errorMessage='Please enter a city'
                                input={{
                                    className: formStyles['input--large'],
                                    type:"text",
                                    id:"city",
                                    value: cityValue,
                                    onBlur: cityBlurHandler,
                                    onChange: cityChangeHandler
                                }}
                            />
                            
                            <FormField
                                wrapperClass={stateHasError ? formStyles['form-control--invalid'] : ''}
                                label='State'
                                hasError={stateHasError}
                                errorMessage='Please enter a state'
                                input={{
                                    className: formStyles['input--large'],
                                    type:"text",
                                    id:"state",
                                    value: stateValue,
                                    onBlur: stateBlurHandler,
                                    onChange: stateChangeHandler
                                }}
                            />
                            
                            <FormField
                                wrapperClass={zipHasError ? formStyles['form-control--invalid'] : ''}
                                label='Zip'
                                hasError={zipHasError}
                                errorMessage='Please enter a postal code'
                                input={{
                                    className: formStyles['input--large'],
                                    type:"text",
                                    id:"zip",
                                    value: zipValue,
                                    onBlur: zipBlurHandler,
                                    onChange: zipChangeHandler
                                }}
                            />
                        </div>
                    </React.Fragment>
                }
            </div>

            <footer className={formStyles['form__footer']}>
                {
                    !formSubmitSuccessful &&
                    <React.Fragment>
                        <button className={`${buttonStyles.button} ${buttonStyles['button--border']}`} type="button" onClick={cancelCheckoutHandler}>Cancel</button>    
    
                        <button className={buttonStyles.button} disabled={!formValid}>Submit</button>
                    </React.Fragment>
                }

                {
                    formSubmitSuccessful &&
                    <button className={`${buttonStyles.button} ${buttonStyles['button--border']}`} type="button" onClick={context.closeModal}>Close</button>
                }
            </footer>
        </form>
    )
}

export default Checkout;