import TextField from "../TextField/TextField";
import "./form.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite o seu nome" />
        <TextField label="Cargo" placeholder="Digite o seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da sua imagem"/>
      </form>
    </section>
  );
};

export default Formulario;
