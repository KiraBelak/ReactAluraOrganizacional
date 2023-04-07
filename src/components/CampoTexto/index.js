import "./CampoTexto.css";
const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        placeholder={`${props.txt}...`}
        required={props.required}
        value={props.valor}
        onChange={(e) => props.actualizar(e.target.value)}
      />
    </div>
  );
};

export default CampoTexto;
