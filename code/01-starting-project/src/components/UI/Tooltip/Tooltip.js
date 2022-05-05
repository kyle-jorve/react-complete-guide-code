import styles from './Tooltip.module.css';

function Tooltip(props) {
    return (
        <div className={`${styles.tooltip}${props.active ? ` ${styles['tooltip--active']}` : ''}`}>
            {props.children}
        </div>
    )
}

export default Tooltip;