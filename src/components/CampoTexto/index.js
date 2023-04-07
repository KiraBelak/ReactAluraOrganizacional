import "./CampoTexto.css";
const CampoTexto = (props) => {
  const placeholdeModificado= `${props.txt}...`

  const {type = "text"}  = props;


  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholdeModificado}
        required={props.required}
        value={props.valor}
        onChange={(e) => props.actualizar(e.target.value)}
        type={type}
      />
    </div>
  );
};

export default CampoTexto;
