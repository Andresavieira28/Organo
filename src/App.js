import Banner from './componentes/Banner/banner';
import TextField from './componentes/TextField/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome" placeholder="Digite o seu nome"/>
      <TextField label="Cargo" placeholder="Digite o seu cargo"/>
      <TextField label="Imagem" placeholder="Digite o endereço da sua imagem"/>
    </div>
  );
}

export default App;
