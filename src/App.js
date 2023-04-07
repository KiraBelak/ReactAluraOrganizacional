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
    puesto: "Instructor",
    fav: true,
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false,
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true,
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false,
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: true,
  }]);

//ELIMINAR COLABORADOR
  const eliminarColaborador = (colaborador) => {
    setColaboradores(colaboradores.filter((colab) => {
      return colab.nombre !== colaborador.nombre;
    }));
  };

  //actualizar color de equipo
  const actualizarColor = (equipo, color) => {
    
    setEquipos(equipos.map((equipoActual) => {
      if (equipoActual.tiulo === equipo) {
        return {
          ...equipoActual,
          colorPrimario: color,
        };
      } else {
        return equipoActual;
      }
    }));

  };


  const manejoClick = () => {
    setOpen(!open);
  };

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  

  const [equipos,setEquipos] = useState ([
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
  ]);

  //crear un nuevo equipo
  const crearEquipo = (nequipo) => {
  console.log(nequipo);
    setEquipos([...equipos, nequipo]);
  };

  const like = (data) => {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.foto === data) {
        return {
          ...colaborador,
          fav: !colaborador.fav,
        };
      }
      return colaborador;
    }));

    
  };

  return (
    <div>
      <Header />
      {open && (
        <Formulario equipos={equipos} registrarcolab={registrarColaborador} crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiar={manejoClick} />
      {equipos.map((equipo) => {
        return (
          <Equipo
            key={equipo.tiulo}
            equipo={equipo.tiulo}
            colorPrimario={equipo.colorPrimario}
            colorSecundario={equipo.colorSecundario}
            actualizarColor={actualizarColor}
            like={like}
            colaboradores={colaboradores.filter( (colaborador) => {
              return colaborador.equipo === equipo.tiulo;
            })
            }
            eliminarColaborador={eliminarColaborador}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
