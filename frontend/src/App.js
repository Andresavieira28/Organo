import { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './componentes/Banner/banner';
import Form from './componentes/form/form'
import Time from './componentes/Time/time';
import Rodape from './componentes/rodape/rodape';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800")
      .then(res => setColaboradores(res.data))
      .catch(err => console.error("Erro ao buscar colaboradores:", err));
  }, []);

  const aoNovoColaboradorAdd = (colaborador) => {
    axios.post("http://localhost:8800", colaborador)
      .then((res) => {
        // Se o backend retornar o novo colaborador com ID, por exemplo
        console.log('Colaborador criado:', res.data);
        const colaboradorCriado = res.data;
        setColaboradores([...colaboradores, colaboradorCriado]);
        console.log("Novo estado de colaboradores:", [...colaboradores, colaboradorCriado]);
      })
      .catch(err => console.error("Erro ao adicionar colaborador:", err));
  }

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Back-End',
      corPrimaria: '#ffc26c',
      corSecundaria: '#fff0da',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
   {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
   },
   {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
   }
  
  ]

  return (
    <div className="App">
      <Banner />

      <Form times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdd(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome}
        nome= {time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />
    </div>
  );
}

export default App;
