import './TextField.css'

const TextField = (props) => {

    //let valor = 'teste';

    const aoDigitado = (e)=> {
        props.aoAlterado(e.target.value);
    }

    return (
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
    )
}

export default TextField