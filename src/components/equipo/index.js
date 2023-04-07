import "./equipo.css";
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    const { equipo, colorPrimario } = props;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;


    return (
        <>
        {colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario,0.6)}}>
            <input
                type="color"
                value={colorPrimario}
                className="InputColor"
                onChange={(e) => {
                    actualizarColor(equipo ,e.target.value);
                        }}
            />
        <h3 style={{borderColor:colorPrimario}} >{equipo}</h3>
        <div className="integrantes">
            {colaboradores.map((colaborador, key) => {
                if (colaborador.equipo === equipo) {
                    return (
                        <Colaborador
                            key={key}
                            nombre={colaborador.nombre}
                            puesto={colaborador.puesto}
                            foto={colaborador.foto}
                            fav={colaborador.fav}
                            like={props.like}
                            colorPrimario={colorPrimario}
                            colorSecundario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        />
                    );
                }else {
                    return null;
                }
            })
            }
            </div>
        </section>
        }
        </>
    );
    }

export default Equipo;