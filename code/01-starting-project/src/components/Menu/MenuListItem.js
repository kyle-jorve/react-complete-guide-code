import React, { useContext, useRef, useState } from 'react';
import CartContext from '../../context/cart-context';
import Tooltip from '../UI/Tooltip/Tooltip';

import styles from './Menu.module.css';
import buttonStyles from '../UI/Button/Button.module.css';

function MenuListItem(props) {
    const inputRef = useRef();
    const context = useContext(CartContext);
    const [formIsValid, setFormIsValid] = useState(null);

    function validateForm() {
        if (inputRef.current.value.trim().length && inputRef.current.value > 0) {
            setFormIsValid(true);

            return true;
        }
        else {
            setFormIsValid(false);

            return false;
        }
    }

    function submitFormHandler(event) {        
        const meal = {
            title: event.target.dataset.title,
            id: event.target.id,
            amount: Number(inputRef.current.value),
            price: Number(event.target.dataset.price)
        };

        event.preventDefault();
        
        if (validateForm()) {
            context.selectMeal(meal);
        }
    }

    return (
        <li className={styles['menu__item']}>
            <h3 className={styles['menu__item-title']}>{props.title}</h3>

            <span className={styles['menu__item-price']}>${props.price.toFixed(2)}</span>

            <p className={styles['menu__item-desc']}>{props.description}</p>

            <form
                id={props.id}
                data-price={props.price}
                data-title={props.title}
                className={styles['menu__item-form']}
                onSubmit={submitFormHandler}
            >
                <Tooltip active={formIsValid === false}>
                    Invalid value. Please enter a value between 1 and 5.
                </Tooltip>

                <div className={`${styles['form-control']}${props.className ? ` ${props.className}` : ''}`}>
                    <label htmlFor={props.id}>{props.label}</label>
                    <input
                        ref={inputRef}
                        id={`amount-${props.id}`}
                        type='number'
                        defaultValue='1'
                        min='1'
                        max='5'
                        step='1'
                        onChange={validateForm}
                    />
                </div>
                
                <button
                    className={`${buttonStyles.button} ${styles['menu__item-button']}`}
                    type={'submit'}
                >
                    + Add
                </button>
            </form>
        </li>
    )
}

export default MenuListItem;