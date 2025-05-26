import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import TextField from "../TextField/TextField";
import Botao from "../botao/botao";
import "./form.css";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const save = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={save}>
        <h2 className="formulario__titulo">Preencha os dados do colaborador</h2>

        <div className="formulario__campo">
          <label htmlFor="nome-colaborador">Nome</label>
          <TextField
            id="nome-colaborador"
            obrigatorio={true}
            placeholder="Digite o seu nome"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
        </div>

        <div className="formulario__campo">
          <label htmlFor="cargo-colaborador">Cargo</label>
          <TextField
            id="cargo-colaborador"
            obrigatorio={true}
            placeholder="Digite o seu cargo"
            valor={cargo}
            aoAlterado={(valor) => setCargo(valor)}
          />
        </div>

        <div className="formulario__campo">
          <label htmlFor="imagem-colaborador">Imagem</label>
          <TextField
            id="imagem-colaborador"
            placeholder="Endereço do seu GitHub + .png"
            valor={imagem}
            aoAlterado={(valor) => setImagem(valor)}
          />
        </div>

        <div className="formulario__campo">
          <label htmlFor="time-colaborador">Time</label>
          <ListaSuspensa
            id="time-colaborador"
            obrigatorio={true}
            itens={props.times}
            valor={time}
            aoAlterado={(valor) => setTime(valor)}
          />
        </div>

        <div className="formulario__acao">
          <Botao>Criar Card</Botao>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
