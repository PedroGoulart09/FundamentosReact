const msg = "primeiros componentes";
export default function comp(props) {
    return (
        <div>
            <h2>sejam bem vindos aos !!</h2>
            <p>{msg}</p>
            <div>{props.children}</div>
        </div>
    );
}
