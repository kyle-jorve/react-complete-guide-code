import CartButton from './CartButton';

import styles from './Header.module.css';

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={`${styles['header__row']} wrapper`}>
                <h1 className={styles['header__title']}>{props.title}</h1>
                
                <CartButton />
            </div>
        </header>
    );
}

export default Header;