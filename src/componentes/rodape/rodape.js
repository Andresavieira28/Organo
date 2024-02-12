import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul >
                <li>
                    <a href="https://github.com/Andresavieira28" target="_blank" rel="noreferrer">
                        <img src="imagens/GitHub.png" alt="link1" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/andresa-vieira/" target="_blank" rel="noreferrer">
                        <img src="imagens/linkedin.png" alt="link2" />
                    </a>
                </li>
                <li>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer">
                        <img src="imagens/email.png" alt="link3" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="logo" />
        </section>
        <section>
            <p>
                Desenvolvido por <a href='https://www.linkedin.com/in/andresa-vieira/'>Andresa Vieira</a>
            </p>
        </section>
    </footer>)
}

export default Rodape
