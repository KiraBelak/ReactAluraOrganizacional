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
    </section>
  );
};

export default Formulario;
