import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../../../context/cart-context';

import styles from './Modal.module.css';

function ModalPort(props) {
    const context = useContext(CartContext);

    return (
        <div className={`${styles.lightbox}${context.modalActive ? ` ${styles['lightbox--active']}` : ''}`}>
            {props.children}

            <span aria-hidden={'true'} className={styles['lightbox__overlay']} onClick={context.closeModal}></span>
        </div>
    );
}

function Modal(props) {
    const modalPortal = document.querySelector('#modal-root');
    
    return ReactDOM.createPortal(
        <ModalPort>
            {props.children}
        </ModalPort>,
        modalPortal
    );
}

export default Modal;