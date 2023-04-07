import "./App.css";
import Header from "./components/Header/header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/miorg";
import { useState } from "react";
import Equipo from "./components/equipo";
import Footer from "./components/footer";

function App() {
  const [open, setOpen] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }]);

  const manejoClick = () => {
    setOpen(!open);
  };

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const equipos = [
    {
      tiulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7e9",
    },
    {
      tiulo: "Front End",
      colorPrimario: "#82cFFa",
      colorSecundario: "#e8f8ff",
    },
    {
      tiulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      tiulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      tiulo: "UX y diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      tiulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      tiulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {open && (
        <Formulario equipos={equipos} registrarcolab={registrarColaborador} />
      )}
      <MiOrg cambiar={manejoClick} />
      {equipos.map((equipo) => {
        return (
          <Equipo
            key={equipo.tiulo}
            equipo={equipo.tiulo}
            colorPrimario={equipo.colorPrimario}
            colorSecundario={equipo.colorSecundario}
            colaboradores={colaboradores.filter( (colaborador) => {
              return colaborador.equipo === equipo.tiulo;
            })
            }
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
