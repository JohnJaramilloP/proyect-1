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
import Swal from "sweetalert2";
import { Delete } from "@mui/icons-material";

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
  graphicSupportOptions,
} = require("../components/services");

const recepcion = ["Si", "No"];

const participacion = ["Si", "No", "No aplica"];

const representacionTerceros = [
  "Asesoría",
  "Elaboración de demanda",
  "Contestación de demanda",
  "Acción constitucional",
  "Representación a terceros",
];

export const SeeCaseEstudent = ({ setViews }) => {
  const handleView = () => {
    setViews(1);
  };

  const [data, setData] = useState({
    id: "2233",
    year: "2022",
    internalNumber: "Radicado",
    attentionConsultantDate: "12 de noviembre",
    receptionDate: "20 de noviembre",
    plaintiff: "Demandante",
    defendant: "Demandado",
    area: "CIVIL Y COMERCIAL",
    origin: "USUARIO INTERNO",
    matter: "Contratos",
    receivedCase: "Si",
    studentRecepcionist: "Juan Pérez",
    studentRecepcionistCapacity: "Estudiante",
    attentionPlace: "Centro principal",
    studentAssigne: "Oliver Hansen",
    studentAsigneeCapacity: "Abogado",
    appointmentDateByUser: "3 de julio",
    individualParticipation: "Si",
    advisor: "Ricardo Vélez",
    thirdPartyRepresentation: "Asesoría",
    audienceDateTime: "15 de agosto",
    audienceTime: "03:00",
    audienceResult: "ACTA DE ACUERDO PARCIAL",
    caseStatus: "Conciliacion",
    receiverStudent: "Carlos Marín",
    studentPeaceFulCertificate: "En espera",
    graphicSupport: "FAMILIA",
  });
  const [area, setArea] = useState([]);
  const [origen, setOrigen] = useState([]);
  const [calidad, setCalidad] = useState([]);
  const [materia, setMateria] = useState([]);
  const [resultadoAudiencia, setResultadoAudiencia] = useState([]);
  const [graficar, setGraficar] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
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
    graphicSupportOptions().then((res) => {
      let resultado = res.map((res) => res.name);
      setGraficar(resultado);
    });
  }, []);

  const alert = (icon, text) => {
    Swal.fire({
      position: "center",
      icon: icon,
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };


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
            value={data.id}
            name="id"
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
            value={data.year}
            name="year"
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
            value={data.internalNumber}
            name="internalNumber"
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
            value={data.attentionConsultantDate}
            name="attentionConsultantDate"
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
            value={data.receptionDate}
            name="receptionDate"
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
            value={data.plaintiff}
            name="plaintiff"
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
            value={data.defendant}
            name="defendant"
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
                value={data.area}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="area"
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
                value={data.matter}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="matter"
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
                value={data.origin}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="origin"
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
                value={data.receivedCase}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="receivedCase"
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
            value={data.studentRecepcionist}
            name="studentRecepcionist"
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
            value={data.attentionPlace}
            name="attentionPlace"
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
                value={data.studentRecepcionistCapacity}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="studentRecepcionistCapacity"
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
            value={data.studentAssigne}
            name="studentAssigne"
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
            value={data.studentAsigneeCapacity}
            name="studentAsigneeCapacity"
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
            value={data.appointmentDateByUser}
            name="appointmentDateByUser"
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
                value={data.individualParticipation}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="individualParticipation"
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
            value={data.advisor}
            name="advisor"
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
                value={data.thirdPartyRepresentation}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="thirdPartyRepresentation"
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
            value={data.audienceDateTime}
            name="audienceDateTime"
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
            value={data.audienceTime}
            name="audienceTime"
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
                value={data.audienceResult}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="audienceResult"
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
            value={data.caseStatus}
            name="caseStatus"
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
            value={data.receiverStudent}
            name="receiverStudent"
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
            value={data.studentPeaceFulCertificate}
            name="studentPeaceFulCertificate"
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

          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Apoyo graficar
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={data.graphicSupport}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              name="graphicSupport"
            >
              {graficar.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            marginBottom: "20px",
          }}
        >
          Documentación del caso:
        </Typography>

        <Grid container>
          <form
            action="../../form-result.php"
            method="post"
            enctype="multipart/form-data"
            target="_blank"
          >
            <p>Sube un nuevo documento: </p>
            <input type="file" name="archivosubido" multiple />
            <br />
            {/* <input type="submit" value="Enviar datos" /> */}
          </form>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: 5,
            padding: "0 40px",
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
            <Button
              style={{ marginLeft: 10, background: "#dc3545", border: "none" }}
            >
              {" "}
              <Delete />{" "}
            </Button>
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
            <Button
              style={{ marginLeft: 10, background: "#dc3545", border: "none" }}
            >
              {" "}
              <Delete />{" "}
            </Button>
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
            <Button
              style={{ marginLeft: 10, background: "#dc3545", border: "none" }}
            >
              {" "}
              <Delete />{" "}
            </Button>
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
            <Button
              style={{ marginLeft: 10, background: "#dc3545", border: "none" }}
            >
              {" "}
              <Delete />{" "}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Button
        onClick={() => {
          handleView();
          alert("success", "Cambios guardados");
        }}
        style={{
          width: "200px",
          height: "50px",
          margin: "10px auto",
          borderRadius: "50px",
          fontSize: 22,
          background: "#369ffa",
          border: "none",
        }}
      >
        Guardar cambios
      </Button>

      <Button
        onClick={handleView}
        style={{
          width: "200px",
          height: "50px",
          margin: "10px auto",
          borderRadius: "50px",
          fontSize: 22,
          background: "#dc3545",
          border: "none",
        }}
      >
        Salir
      </Button>
    </Grid>
  );
};
