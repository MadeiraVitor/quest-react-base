export const Button = ({ label }) => {
    const mostrarAlertLabel = () => {
        alert(`A label desse botão é: ${label}`);
    };

    return (
        <button onClick={mostrarAlertLabel}>
            Clique aqui
        </button>
    )
}