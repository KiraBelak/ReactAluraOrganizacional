import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../boton";
import { useState } from "react";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [tiulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data={
        nombre,
        puesto,
        foto,
        equipo
    }
    props.registrarcolab(data);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    console.log(tiulo, color)
     props.crearEquipo({ tiulo, color })
}

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" txt="Ingresar nombre" required valor={nombre} actualizar={setNombre}/>
        <CampoTexto titulo="Puesto" txt="Ingresar puesto" required valor={puesto} actualizar={setPuesto}/>
        <CampoTexto titulo="Foto" txt="Ingresar enlace de foto" required valor={foto} actualizar={setFoto}/>
        <ListaOpciones valor={equipo} actualizar={setEquipo} equipos={props.equipos}/> 
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto
                titulo="Titulo"
                txt="Ingresar titulo"
                required
                valor={tiulo}
                actualizar={setTitulo}
            />
            <CampoTexto
                titulo="Color"
                txt="Ingresar el color en Hex"
                required
                valor={color}
                actualizar={setColor}
                type="color"
            />
            <Boton texto={"Registrar equipo"}/>
        </form>
    </section>
  );
};

export default Formulario;
