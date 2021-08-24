import './Card.css';

function Card(props) {
    //To allow classes to be added to Cards
    const classes = 'card ' + props.className;

    //props.cjildren to allow it to be a wrapper component
    // "Composition"
    return <div className={classes}>{props.children}</div>;
}

export default Card;
