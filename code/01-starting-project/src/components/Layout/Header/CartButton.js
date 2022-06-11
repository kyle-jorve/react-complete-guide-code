import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../../context/cart-context';

import styles from './CartButton.module.css';
import buttonStyles from '../../UI/Button/Button.module.css';

let buttonTimer;

function CartButton() {
    const context = useContext(CartContext);
    const [cartButtonActive, setCartButtonActive] = useState(false);

    useEffect(() => {
        if (context.selectedMeals.length === 0) return;

        setCartButtonActive(true);

        buttonTimer = setTimeout(() => {
            setCartButtonActive(false);
        }, 300);

        return () => {
            clearTimeout(buttonTimer);
        }
    }, [context.selectedMeals]);

    return (
        <button
            className={`${buttonStyles.button} ${styles['cart-button']}${cartButtonActive ? ` ${styles['cart-button--active']}` : ''}`}
            onClick={context.openModal}
        >
            <svg
                className={styles['cart-button__icon']}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                >
                <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
            </svg>

            <span className={styles['cart-button__text']}>
                Your Cart
            </span>

            {context.totalMeals}
        </button>
    )
}

export default CartButton;