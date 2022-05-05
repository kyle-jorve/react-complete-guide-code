import Card from '../../UI/Card/Card';

import styles from './Hero.module.css';

function Hero(props) {
    return (
        <section className={styles.hero} style={{backgroundImage: `url('${props.imgUrl}')`}}>
            <Card className={styles['hero__content']}>
                {props.children}
            </Card>
        </section>
    );
}

export default Hero;