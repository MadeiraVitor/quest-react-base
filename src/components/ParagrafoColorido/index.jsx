export const ParagrafoColorido = ({ texto, cor }) => {
    return (
        <p style={{ color: cor }}>
            {texto.toUpperCase()}
        </p>
    );
}