import "./ListaOpciones.css";

const ListaOpciones=(props)=>{
    return <div className="lista-opciones">
        <label >Equipos</label>
        <select value={props.valor} onChange={(e) => props.actualizar(e.target.value)} >
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {props.equipos.map((equipo) => {
                return <option key={equipo.tiulo} value={equipo.tiulo}>{equipo.tiulo}</option>
            })}
            </select>
        </div>
}

export default ListaOpciones;