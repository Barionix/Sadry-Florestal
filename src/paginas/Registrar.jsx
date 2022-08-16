
import './css/Register.css';

function Registrar() {
    return (
        <div>
            <div className="input-group input-group-lg" id="infoColeta">
                <span className="input-group-tet">Informações da coleta:</span>
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

            <div className="input-group input-group-lg" id="infoPlanta">
                <span className="input-group-tet">Informações da planta:</span>
                <input type="text" placeholder="Hábito"/>
                <input type="text" placeholder="Origem"/>
                <input type="text" placeholder="Período de floração"/>
                <input type="text" placeholder="Sistema de polinização"/>
            </div>
        </div>
    )
}

export default Registrar;