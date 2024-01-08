import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Form from './componentes/form/form'

function App() {

  const [colaboradores, setColaboradores] = useState('');

  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador);
    setColaboradores ([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado = {colaboorador => aoNovoColaboradorAdd(colaboorador)}  />
    </div>
  );
}

export default App;
