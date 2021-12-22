import "./card.css";

export default function card(props) {

    const style = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <section className="Card-All">
            <div className="card" style={style}>
                <div className="cardFilho">{props.titulo}</div>
                <div className="content">{props.children}</div>
            </div>
        </section>
    );
}
