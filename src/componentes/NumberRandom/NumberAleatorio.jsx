
export default function NumberAleatorio(props) {

    const { min, max } = props;

    const result = Math.floor(Math.random() * (max - min) + min);
    return (
        <div>
            <h1>Numero aleatorio</h1>
            <p><strong>Valor minimo:</strong>{max}</p>
            <p><strong>Valor maximo:</strong>{min}</p>
            <p><strong>Valor resultado:</strong>{result}</p>


        </div>

    )
}


