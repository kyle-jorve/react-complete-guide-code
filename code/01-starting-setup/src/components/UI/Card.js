import './Card.css'

function Card(data) {
    const cssClass = `card${data.className ? ` ${data.className}` : ''}`;

    return (
        <div className={cssClass}>
            {data.children}
        </div>
    );
}

export default Card;