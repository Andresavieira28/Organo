import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import TextField from "../TextField/TextField";
import Botao from "../botao/botao"
import "./form.css";
import { useState } from "react";

const Formulario = (props) => {

  const times = ['Programação',
  'Front-End',
  'Data Science',
  'Devops',
  'UX e Design',
  'Mobile',
  'Inovação e Gestão']

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const save = (e) => {
    e.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          obrigatorio={true}
          label="Nome" 
          placeholder="Digite o seu nome" 
          valor={nome} 
          aoAlterado={valor => setNome(valor)} />

        <TextField 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite o seu cargo"
          valor={cargo} 
          aoAlterado={valor => setCargo(valor)}  />

        <TextField 
          label="Imagem" 
          placeholder="Digite o endereço da sua imagem"
          valor={imagem} 
          aoAlterado={valor => setImagem(valor)} />

        <ListaSuspensa 
          obrigatorio={true} 
          label="Time"
          itens={times}
          valor = {time}
          aoAlterado= {valor => setTime(valor)}
          />

        <Botao children="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;
