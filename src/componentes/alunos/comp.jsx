export default function segundaComp(parametro) {
    const aproved = parametro.nota >= 7 ? "Aprovado" : "Reprovado";
    
    return (
        <div>
            <h2>{parametro.titulo}</h2>
            <div>
                <strong> {parametro.aluno} </strong>
                tem nota
                <strong> {parametro.nota } </strong>e está
                <strong> {aproved} </strong>
            </div>
        </div>
    );
}
