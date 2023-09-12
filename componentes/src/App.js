import OlaMundo from'./components/OlaMundo'
import Frase from'./components/Frase'
import DigaMeuNome from './components/DigaMeuNome';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1> Qual é meu nome</h1>
      <DigaMeuNome nome="Kaue" idade="12" profissao="professor" />
    </div>
  );
}

export default App;
