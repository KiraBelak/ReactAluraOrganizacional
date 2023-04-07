import "./colab.css";
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Colaborador = (props) => {
    const { nombre, puesto, foto , fav} = props;
    const { colorPrimario, eliminarColaborador} = props;
    return (
        <div className="colaborador">
            <span className="eliminar" onClick={() => eliminarColaborador(props)}>
                <AiFillCloseCircle />
            </span>

        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={`Foto de ${nombre}`} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                
                {fav ? <AiFillHeart color="red" onClick={()=>props.like(foto)}/> : <AiOutlineHeart onClick={()=>props.like(foto)}/>}
                
                </div>
        </div>
    );
    }

export default Colaborador;