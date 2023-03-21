import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import TextField from "../TextField/TextField";
import Botao from "../botao/botao"
import "./form.css";

const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const save = (e) => {
    e.preventDefault()
    console.log('o form foi submetido!')
  }

  return (
    <section className="formulario">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <TextField obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da sua imagem"/>
        <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
        <Botao children="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;
