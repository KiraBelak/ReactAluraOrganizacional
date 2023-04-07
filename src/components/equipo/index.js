import "./equipo.css";
import Colaborador from "../colaborador";

const Equipo = (props) => {
    const { equipo, colorPrimario, colorSecundario } = props;
    const { colaboradores } = props;
    return (
        <>
        {colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: colorSecundario}}>
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
                            colorPrimario={colorPrimario}
                            colorSecundario={colorSecundario}
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