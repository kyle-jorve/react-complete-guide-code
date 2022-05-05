import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import ModalListItem from './ModalListItem';
import Button from '../Button/Button';
import CartContext from '../../../context/cart-context';

import styles from './Modal.module.css';
import buttonStyles from '../Button/Button.module.css';

function ModalPort(props) {
    const context = useContext(CartContext);

    function orderHandler() {
        console.log('Too late to back out now. 😈');
    }

    return (
        <div className={`${styles.lightbox}${context.cartActive ? ` ${styles['lightbox--active']}` : ''}`}>
            <form className={styles['lightbox__box']}>
                <div className={styles['lightbox__title-row']}>
                    <h2 className={styles['lightbox__title']}>{props.title}</h2>

                    <span className={styles['lightbox__total-cost']}>${context.totalCost}</span>

                    <div className={styles['lightbox__buttons']}>
                        <Button
                            className={buttonStyles['button--border']}
                            type={'button'}
                            onClick={context.closeCart}
                        >
                            Close
                        </Button>

                        {
                            context.selectedMeals.length > 0 &&
                                
                            <Button
                                type={'button'}
                                onClick={orderHandler}
                            >
                                Order
                            </Button>
                        }
                    </div>
                </div>

                {
                    context.selectedMeals.length > 0 &&

                    <div className={styles['lightbox__inner']}>
                        <ul className={styles['lightbox__list']}>
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
                    </div>
                }
            </form>

            <span aria-hidden={'true'} className={styles['lightbox__overlay']} onClick={context.closeCart}></span>
        </div>
    );
}

function Modal(props) {
    const modalPortal = document.querySelector('#modal-root');
    
    return ReactDOM.createPortal(
        <ModalPort title={props.title} />,
        modalPortal
    );
}

export default Modal;