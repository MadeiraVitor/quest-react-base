import { Button } from "./components/Button"
import { ParagrafoColorido } from "./components/ParagrafoColorido"


function App() {

  return (
    <>
      <ParagrafoColorido texto="Olá, mundo! Este é um parágrafo colorido." cor="red" />
      <Button label="Baixar CV" />
    </>
  )
}

export default App
