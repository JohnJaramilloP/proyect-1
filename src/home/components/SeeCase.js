import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, TextField, Typography } from "@mui/material";
import { CgClose } from "react-icons/cg";
import { Button } from "reactstrap";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const {
  areas,
  subjectMatters,
  origins,
  capacities,
  audienceResults,
} = require("../components/services");

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const nombres = [
  "Ricardo Vélez",
  "Carolina García",
  "Luis Pérez",
  "Carlos Mejía",
  "Eliana Marín",
  "Katherine Zapata",
  "John Hoyos",
  "Wilson Londoño",
  "Virginia Ramírez",
  "Pedro Cruz",
];

const recepcion = ["Si", "No"];

const participacion = ["Si", "No", "No aplica"];

const representacionTerceros = [
  "Asesoría",
  "Elaboración de demanda",
  "Contestación de demanda",
  "Acción constitucional",
  "Representación a terceros",
];

export const SeeCase = ({ setViews }) => {
  const handleView = () => {
    setViews(1);
  };

  const [numeroCaso, setNumeroCaso] = useState("2233");
  const [ano, setAno] = useState("2022");
  const [radicadoInterno, setRadicadoInterno] = useState("Radicado");
  const [fechaAtencion, setFechaAtencion] = useState("12 de Noviembre");
  const [fechaRecepcion, setFechaRecepcion] = useState("20 de noviembre");
  const [parteAccionante, setParteAccionante] = useState("Demandante");
  const [parteAccionada, setParteAccionada] = useState("demandado");
  const [estudianteAsignado, setEstudianteAsignado] = useState("Oliver Hansen");
  const [asesorAsignado, setAsesorAsignado] = useState("Ricardo Vélez");
  const [area, setArea] = useState([]);
  const [areaSeleccionada, setAreaSeleccionada] = useState("CIVIL Y COMERCIAL");
  const [origen, setOrigen] = useState([]);
  const [origenSeleccionado, setOrigenSeleccionado] =
    useState("USUARIO INTERNO");
  const [materia, setMateria] = useState([]);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState("Contratos");
  const [calidad, setCalidad] = useState([]);
  const [calidadSeleccionada, setCalidadSeleccionada] = useState("Abogado");
  const [calidad2, setCalidad2] = useState("estudiante");
  const [fechaCitacion, setFechaCitacion] = useState("3 de julio");
  const [recepcionCaso, setRecepcionCaso] = useState("Si");
  const [estudianteRecepcion, setEstudianteRecepcion] = useState("Juan Pérez");
  const [lugarAtencion, setLugarAtencion] = useState("Centro principal");
  const [participacionOpcion, setParticipacionOpcion] = useState("Si");
  const [representacionTercerosOpcion, setRepresentacionTercerosOpcion] =
    useState("Asesoría");
  const [fechaAudiencia, setfechaAudiencia] = useState("15 de agosto");
  const [horaAudiencia, setHoraAudiencia] = useState("03:00");
  const [resultadoAudiencia, setResultadoAudiencia] = useState([]);
  const [resultadoAudienciaSeleccionado, setResultadoAudienciaSeleccionado] =
    useState("ACTA DE ACUERDO PARCIAL");
  const [estadoProceso, setEstadoProceso] = useState("Conciliacion");
  const [estudianteRecibe, setEstudianteRecibe] = useState("Carlos Marín");
const [pazSalvo, setPazSalvo] = useState("En espera");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    switch (event.target.name) {
      case "asignar_estudiante":
        setEstudianteAsignado(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "asignar_asesor":
        setAsesorAsignado(typeof value === "string" ? value.split(",") : value);
        break;
      case "numeroCaso":
        setNumeroCaso(typeof value === "string" ? value.split(",") : value);
        break;
      case "ano":
        setAno(typeof value === "string" ? value.split(",") : value);
        break;
      case "radicadoInterno":
        setRadicadoInterno(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "fechaAtencion":
        setFechaAtencion(typeof value === "string" ? value.split(",") : value);
        break;
      case "fechaRecepcion":
        setFechaRecepcion(typeof value === "string" ? value.split(",") : value);
        break;
      case "parteAccionante":
        setParteAccionante(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "parteAccionada":
        setParteAccionada(typeof value === "string" ? value.split(",") : value);
        break;
      case "select_area":
        setAreaSeleccionada(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "select_materia":
        setMateriaSeleccionada(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "select_origen":
        setOrigenSeleccionado(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "select_calidad":
        setCalidadSeleccionada(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "calidad2":
        setCalidad2(typeof value === "string" ? value.split(",") : value);
        break;
      case "fechaCitacion":
        setFechaCitacion(typeof value === "string" ? value.split(",") : value);
        break;
      case "select_recepcionCaso":
        setRecepcionCaso(typeof value === "string" ? value.split(",") : value);
        break;
      case "estudianteRecepcion":
        setEstudianteRecepcion(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "lugarAtencion":
        setLugarAtencion(typeof value === "string" ? value.split(",") : value);
        break;
      case "select_participacion":
        setParticipacionOpcion(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "select_representacionTerceros":
        setRepresentacionTercerosOpcion(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "fechaAudiencia":
        setfechaAudiencia(typeof value === "string" ? value.split(",") : value);
        break;
      case "horaAudiencia":
        setHoraAudiencia(typeof value === "string" ? value.split(",") : value);
        break;
      case "select_resultadoAudiencia":
        setResultadoAudienciaSeleccionado(
          typeof value === "string" ? value.split(",") : value
        );
        break;
      case "estadoProceso":
        setEstadoProceso(typeof value === "string" ? value.split(",") : value);
        break;
        case "estudianteRecibe":
        setEstudianteRecibe(typeof value === "string" ? value.split(",") : value);
        break;
        case "pazSalvo":
        setPazSalvo(typeof value === "string" ? value.split(",") : value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    areas().then((res) => {
      let areas = res.map((res) => res.name);
      setArea(areas);
    });
    origins().then((res) => {
      let origen = res.map((res) => res.name);
      setOrigen(origen);
    });
    capacities().then((res) => {
      let calidad = res.map((res) => res.name);
      setCalidad(calidad);
    });
    subjectMatters().then((res) => {
      let materia = res.map((res) => res.name);
      setMateria(materia);
    });
    audienceResults().then((res) => {
      let resultado = res.map((res) => res.name);
      setResultadoAudiencia(resultado);
    });
  }, []);

  return (
    <Grid
      container
      style={{
        width: "100%",
        padding: 10,
        position: "relative",
      }}
    >
      <CgClose
        onClick={handleView}
        style={{
          fontSize: 35,
          position: "absolute",
          right: 15,
          top: 15,
          cursor: "pointer",
        }}
      />

      {/* titulo */}

      <Grid
        container
        className="container"
        style={{
          width: "100%",
          margin: "20px 0",
        }}
      >
        <Typography
          variant="h4"
          style={{
            margin: "0 auto",
          }}
        >
          Caso:
        </Typography>
      </Grid>

      {/* select asesor estudiante */}

      <Grid
        container
        sx={{
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid>
          <Typography variant="h4">Asignar estudiante</Typography>

          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Nombre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={estudianteAsignado}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              name="asignar_estudiante"
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <Typography variant="h4">Asignar asesor</Typography>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Nombre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={asesorAsignado}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              name="asignar_asesor"
            >
              {nombres.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* informacion caso */}

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            NÚMERO:
          </Typography>
          <TextField
            id="outlined-basic"
            label="Número"
            variant="outlined"
            defaultValue={numeroCaso}
            name="numeroCaso"
            onChange={handleChange}
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            AÑO:
          </Typography>
          <TextField
            id="outlined-basic"
            label="Ano"
            variant="outlined"
            defaultValue={ano}
            name="ano"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            RADICADO INTERNO
          </Typography>
          <TextField
            id="outlined-basic"
            label="RADICADO INTERNO"
            variant="outlined"
            defaultValue={radicadoInterno}
            name="radicadoInterno"
            onChange={handleChange}
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            FECHA DE ATENCIÓN Y ASESORIA
          </Typography>
          <TextField
            id="outlined-basic"
            label="FECHA DE ATENCIÓN Y ASESORIA"
            variant="outlined"
            defaultValue={fechaAtencion}
            name="fechaAtencion"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            FECHA DE RECEPCION DE CASO
          </Typography>
          <TextField
            id="outlined-basic"
            label="FECHA DE RECEPCION DE CASO"
            variant="outlined"
            defaultValue={fechaRecepcion}
            name="fechaRecepcion"
            onChange={handleChange}
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            PARTE ACCIONANTE
          </Typography>
          <TextField
            id="outlined-basic"
            label="PARTE ACCIONANTE"
            variant="outlined"
            defaultValue={parteAccionante}
            name="parteAccionante"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            PARTE ACCIONADA
          </Typography>
          <TextField
            id="outlined-basic"
            label="PARTE ACCIONADA"
            variant="outlined"
            defaultValue={parteAccionada}
            name="parteAccionada"
            onChange={handleChange}
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="p"
              style={{
                fontWeight: 500,
              }}
            >
              {" "}
              Área (CIVIL, FAMILIA, COMERCIAL, LABORAL, PENAL)
            </Typography>

            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Area</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={areaSeleccionada}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="select_area"
              >
                {area.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="p"
              style={{
                fontWeight: 500,
              }}
            >
              Materia
            </Typography>

            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Materia</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={materiaSeleccionada}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="select_materia"
              >
                {materia.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="p"
              style={{
                fontWeight: 500,
              }}
            >
              ORIGEN (C.J. o EXT)
            </Typography>

            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Origen</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={origenSeleccionado}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="select_origen"
              >
                {origen.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="p"
              style={{
                fontWeight: 500,
              }}
            >
              SE RECEPCIONó EL CASO
            </Typography>

            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Recepción</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={recepcionCaso}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="select_recepcionCaso"
              >
                {recepcion.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            NOMBRE DEL ESTUDIANTE QUE RECEPCIONO EL CASO
          </Typography>
          <TextField
            id="outlined-basic"
            label="NOMBRE DEL ESTUDIANTE QUE RECEPCIONO EL CASO"
            variant="outlined"
            defaultValue={estudianteRecepcion}
            name="estudianteRecepcion"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            LUGAR DE ATENCIÓN
          </Typography>
          <TextField
            id="outlined-basic"
            label="LUGAR DE ATENCIÓN"
            variant="outlined"
            defaultValue={lugarAtencion}
            name="lugarAtencion"
            onChange={handleChange}
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="p"
              style={{
                fontWeight: 500,
              }}
            >
              CALIDAD(E/A)
            </Typography>

            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Calidad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={calidadSeleccionada}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="select_calidad"
              >
                {calidad.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            ESTUDIANTE A QUIEN SE LE ASIGNO EL CASO
          </Typography>
          <TextField
            id="outlined-basic"
            label="ESTUDIANTE A QUIEN SE LE ASIGNO EL CASO"
            variant="outlined"
            defaultValue={estudianteAsignado}
            name="lugarAtencion"
            disabled
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            CALIDAD (E/A)
          </Typography>
          <TextField
            id="outlined-basic"
            label="CALIDAD (E/A)"
            variant="outlined"
            defaultValue={calidad2}
            name="lugarAtencion"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            FECHA DE CITACION DE PARTE USUARIO (MARCAR SI O NO)
          </Typography>
          <TextField
            id="outlined-basic"
            label="FECHA DE CITACION DE PARTE USUARIO (MARCAR SI O NO)"
            variant="outlined"
            defaultValue={fechaCitacion}
            name="fechaCitacion"
            onChange={handleChange}
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="p"
              style={{
                fontWeight: 500,
              }}
            >
              TUVO PARTICIPACIÓN INDIVIDUAL{" "}
            </Typography>

            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">
                Participación
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={participacionOpcion}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="select_participacion"
              >
                {participacion.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            NOMBRE DEL ASESOR
          </Typography>
          <TextField
            id="outlined-basic"
            label="NOMBRE DEL ASESOR"
            variant="outlined"
            defaultValue={asesorAsignado}
            name="asesorAsignado"
            disabled
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="p"
              style={{
                fontWeight: 500,
              }}
            >
              REALIZÓ REPRESENTACION DE TERCEROS
            </Typography>

            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">
                Representación
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={representacionTercerosOpcion}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="representacionTerceros"
              >
                {representacionTerceros.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            FECHA DE AUDIENCIA
          </Typography>
          <TextField
            id="outlined-basic"
            label="FECHA DE AUDIENCIA"
            variant="outlined"
            defaultValue={fechaAudiencia}
            name="fechaAudiencia"
            onChange={handleChange}
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            HORA DE AUDIENCIA
          </Typography>
          <TextField
            id="outlined-basic"
            label="HORA DE AUDIENCIA"
            variant="outlined"
            defaultValue={horaAudiencia}
            name="horaAudiencia"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="p"
              style={{
                fontWeight: 500,
              }}
            >
              RESULTADO DE LA AUDIENCIA
            </Typography>

            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Resultado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={resultadoAudienciaSeleccionado}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="select_resultadoAudiencia"
              >
                {resultadoAudiencia.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            ESTADO DEL PROCESO O RESULTADO DEL PROCESO
          </Typography>
          <TextField
            id="outlined-basic"
            label="ESTADO DEL PROCESO O RESULTADO DEL PROCESO"
            variant="outlined"
            defaultValue={estadoProceso}
            name="estadoProceso"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            ESTUDIANTE QUE RECIBE EL CASO
          </Typography>
          <TextField
            id="outlined-basic"
            label="ESTUDIANTE QUE RECIBE EL CASO"
            variant="outlined"
            defaultValue={estudianteRecibe}
            name="estudianteRecibe"
            onChange={handleChange}
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            PAZ Y SALVO DE ESTUDIANTE EN CONSULTORIO
          </Typography>
          <TextField
            id="outlined-basic"
            label="PAZ Y SALVO DE ESTUDIANTE EN CONSULTORIO"
            variant="outlined"
            defaultValue={pazSalvo}
            name="pazSalvo"
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            APOYO GRAFICAR
          </Typography>
          <TextField
            id="outlined-basic"
            label="APOYO GRAFICAR"
            variant="outlined"
          />
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            className="title"
            style={{
              fontWeight: 600,
              marginBottom: 5,
            }}
          ></Typography>
          <Typography variant="p" className="text"></Typography>
        </Grid>
      </Grid>

      {/* documentacion del caso */}

      <Grid
        container
        sx={{
          margin: "20px 0",
          padding: "20px",
          width: "100%",
          border: "1px solid #00000060",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="p"
          style={{
            fontWeight: 500,
          }}
        >
          Documentación del caso:
        </Typography>

        <Grid
          container
          sx={{
            marginTop: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 1
            </a>
            <Button style={{ marginLeft: 10 }}>Editar documento 1</Button>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 2
            </a>
            <Button style={{ marginLeft: 10 }}>Editar documento 2</Button>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 3
            </a>
            <Button style={{ marginLeft: 10 }}>Editar documento 3</Button>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 4
            </a>
            <Button style={{ marginLeft: 10 }}>Editar documento 4</Button>
          </Grid>
        </Grid>
      </Grid>

      <Button
        onClick={handleView}
        style={{
          width: "200px",
          height: "50px",
          margin: "10px auto",
          borderRadius: "50px",
          fontSize: 22,
        }}
      >
        Salir
      </Button>
    </Grid>
  );
};
