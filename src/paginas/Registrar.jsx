
import './css/Register.css'

function Registrar() {
    return (
        <div className="input-group input-group-lg">
            <div></div>
            <input type="text" placeholder="Número da amostra na palinoteca"/>
            <input type="text" placeholder="Herbário"/>
            <input type="text" placeholder="Número de registro da espécie"/>
            <input type="text" placeholder="Data de coleta"/>
            <input type="text" placeholder="País"/>
            <input type="text" placeholder="Estado"/>
            <input type="text" placeholder="Município"/>
            <input type="text" placeholder="Tipo de formação vegetal"/>
            <input type="text" placeholder="Tipo de formação vegetal"/>
            <input type="text" placeholder="Decimal latitude"/>
            <input type="text" placeholder="Decimal longitude"/>
        </div>
    )
}

export default Registrar;