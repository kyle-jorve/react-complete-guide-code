import React, { useState } from 'react';
import Button from '../UI/Button';
import styles from './Modal.module.css';

function Modal(props) {
	function buttonClickHandler() {
		props.onButtonClick();
	}

	return (
		<div
			className={`${styles.lightbox}${
				props.active ? ` ${styles['lightbox--active']}` : ''
			}`}
		>
			<div className={styles['lightbox__box']}>
				<header className={styles['lightbox__header']}>
					<h2 className={styles['lightbox__title']}>Invalid Input</h2>
				</header>

				<div className={styles['lightbox__body']}>
					{props.message.map((m, index) => {
						return <p key={`message${index + 1}`}>{m}</p>;
					})}

					<footer className={styles['lightbox__footer']}>
						<Button text="Got It" onClick={buttonClickHandler} />
					</footer>
				</div>
			</div>
		</div>
	);
}

export default Modal;
