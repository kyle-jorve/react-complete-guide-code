import React, { useContext } from 'react';
import Button from '../Button/Button';
import CartContext from '../../../context/cart-context';

import styles from './Modal.module.css';
import buttonStyles from '../Button/Button.module.css';

function ModalListItem(props) {
    const context = useContext(CartContext);

    return (
        <li className={styles['lightbox__item']}>
            <div>
                <h3 className={styles['lightbox__item-title']}>
                    {props.title}
                </h3>

                <div className={styles['lightbox__item-price-amount-row']}>
                    <span className={styles['lightbox__item-price']}>
                        ${props.price.toFixed(2)}
                    </span>

                    <span className={styles['lightbox__item-amount']}>
                        x {props.amount}
                    </span>
                </div>
            </div>

            <div className={styles['lightbox__item-buttons']}>
                <Button
                    type={'button'}
                    className={`${styles['lightbox__item-button']} ${buttonStyles['button--border']}`}
                    onClick={() => context.selectMeal({
                        id: props.id,
                        amount: -1,
                        price: props.price
                    })}
                >
                    -
                </Button>

                <Button
                    type={'button'}
                    className={`${styles['lightbox__item-button']} ${buttonStyles['button--border']}`}
                    onClick={() => context.selectMeal({
                        id: props.id,
                        amount: 1,
                        price: props.price
                    })}
                >
                    +
                </Button>
            </div>
        </li>
    )
}

export default ModalListItem;