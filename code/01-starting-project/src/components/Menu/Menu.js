import Card from '../UI/Card/Card';
import MenuListItem from './MenuListItem';

import styles from './Menu.module.css';

function Menu(props) {
    return (
        <div className={'wrapper'}>
            <Card className={styles.menu}>
                <ul className={styles['menu__list']}>
                    {props.items.map(item => {
                        return (
                            <MenuListItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                            />
                        )
                    })}
                </ul>
            </Card>
        </div>
    )
}

export default Menu;