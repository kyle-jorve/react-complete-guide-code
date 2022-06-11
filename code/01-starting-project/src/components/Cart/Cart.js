import React, { useContext } from 'react';

import ModalListItem from '../UI/Modal/ModalListItem';
import CartContext from '../../context/cart-context';

import lightboxStyles from '../UI/Modal/Modal.module.css';
import buttonStyles from '../UI/Button/Button.module.css';

function Cart() {
    const context = useContext(CartContext);

    return (
        <form className={lightboxStyles['lightbox__box']}>
            <header className={lightboxStyles['lightbox__title-row']}>
                <h2 className={lightboxStyles['lightbox__title']}>Total Amount</h2>

                <span className={lightboxStyles['lightbox__total-cost']}>${context.totalCost}</span>

                <div className={lightboxStyles['lightbox__buttons']}>
                    <button
                        className={`${buttonStyles.button} ${buttonStyles['button--border']}`}
                        type='button'
                        onClick={context.closeModal}
                    >
                        Close
                    </button>

                    {
                        context.selectedMeals.length > 0 &&
                        <button
                            className={buttonStyles.button}
                            type='button'
                            onClick={context.openCheckout}
                        >
                            Order
                        </button>
                    }
                </div>
            </header>
            
            <div className={lightboxStyles['lightbox__inner']}>
                {
                    context.selectedMeals.length > 0 &&

                    <ul className={lightboxStyles['lightbox__list']}>
                        {context.selectedMeals.map(item => {
                            return (
                                <ModalListItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    amount={item.amount}
                                />
                            )
                        })}
                    </ul>
                }
            </div>
        </form>
    )
}

export default Cart;