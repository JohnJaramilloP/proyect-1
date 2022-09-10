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
import { Link, useLocation } from "react-router-dom";

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
  attentionPlaces,
  subjectMatters,
  origins,
  capacities,
  caseStatuses,
  audienceResults,
  graphicSupportOptions,
} = require("../components/services");

const {
  cases,
  casesId,
  createCases,
  updateCases,
  deleteCases,
} = require("../components/servicesCases.js");

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
  { id: 1, name: "ASESORIA" },
  { id: 2, name: "ELABORACION DE DEMANDA" },
  { id: 3, name: "CONTESTACION DE DEMANDA" },
  { id: 4, name: "ACCION CONSTITUCIONAL" },
  { id: 5, name: "REPRESANTACION A TERCEROS" },
];

export const SeeCase = () => {
  const location = useLocation();
  const { id } = location.state;

  const [data, setData] = useState({
    id: "",
    year: "",
    internalNumber: "",
    attentionConsultantDate: "",
    receptionDate: "",
    plaintiff: "",
    defendant: "",
    area: "",
    origin: "",
    matter: "",
    receivedCase: "",
    studentRecepcionist: "",
    studentRecepcionistCapacity: "",
    attentionPlace: "",
    studentAssignee: "",
    studentAsigneeCapacity: "",
    appointmentDateByUser: "",
    individualParticipation: "",
    advisor: "",
    thirdPartyRepresentation: "",
    audienceDateTime: "",
    audienceTime: "",
    audienceResult: "",
    caseStatus: "",
    receiverStudent: "",
    studentPeaceFulCertificate: "",
    graphicSupport: "",
  });
  const [area, setArea] = useState([]);
  const [attentionPlace, setattentionPlace] = useState([]);
  const [estadoCaso, setEstadoCaso] = useState([])
  const [origen, setOrigen] = useState([]);
  const [calidad, setCalidad] = useState([]);
  const [materia, setMateria] = useState([]);
  const [resultadoAudiencia, setResultadoAudiencia] = useState([]);
  const [graficar, setGraficar] = useState([]);

  useEffect(() => {
    casesId(id).then((_case) => {
      console.log("datassss", _case);
      setData({
        id: _case.id,
        year: _case.year,
        internalNumber: _case.internalNumber,
        attentionConsultantDate: _case.attentionConsultantDate,
        receptionDate: _case.receptionDate,
        plaintiff: _case.plaintiff && _case.plaintiff.name,
        defendant: _case.defendant && _case.defendant.name,
        area: _case.area && _case.area.id,
        origin: _case.origin && _case.origin.id,
        matter: _case.matter && _case.matter.id,
        receivedCase: _case.receivedCase === true ? "Si" : "No",
        studentRecepcionist:
          _case.studentRecepcionist && _case.studentRecepcionist.name,
        studentRecepcionistCapacity:
          _case.studentRecepcionistCapacity &&
          _case.studentRecepcionistCapacity.id,
        attentionPlace: _case.attentionPlace && _case.attentionPlace.id,
        studentAssignee: _case.studentAssignee && _case.studentAssignee.name,
        studentAsigneeCapacity:
          _case.studentAssigneeCapacity && _case.studentAssigneeCapacity.id,
        appointmentDateByUser:
          _case.appointmentDateByUser === false ? "No" : "Si",
        individualParticipation:
          _case.individualParticipation && _case.individualParticipation.name,
        advisor: _case.advisor && _case.advisor.name,
        thirdPartyRepresentation:
          _case.thirdPartyRepresentation && _case.thirdPartyRepresentation.id,
        audienceDateTime:
          _case.audienceDateTime && _case.audienceDateTime.substring(0, 10),
        audienceTime:
          _case.audienceDateTime && _case.audienceDateTime.substring(11, 16),
        audienceResult: _case.audienceResult && _case.audienceResult.id,
        caseStatus: _case.caseStatus && _case.caseStatus.id,
        receiverStudent: _case.receiverStudent && _case.receiverStudent.name,
        studentPeaceFulCertificate:
          _case.studentPeaceFulCertificate === false
            ? "No"
            : "Si",
        graphicSupport: _case.graphicSupport && _case.graphicSupport.id,
      });
    });
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    areas().then((areas) => {
      setArea(areas);
    });
    attentionPlaces().then((places) => {
      setattentionPlace(places);
    });
    origins().then((origen) => {
      setOrigen(origen);
    });
    caseStatuses().then(estado => {
      setEstadoCaso(estado);
    });
    capacities().then((calidad) => {
      setCalidad(calidad);
    });
    subjectMatters().then((materia) => {
      setMateria(materia);
    });
    audienceResults().then((resultado) => {
      setResultadoAudiencia(resultado);
    });
    graphicSupportOptions().then((res) => {
      setGraficar(res);
    });
  }, []);

  const updateCase = () => {
    let body = {
      socioeconomicLevel: data.socioeconomicLevel,
      year: data.year,
      internalNumber: data.internalNumber,
      attentionConsultantDate: data.attentionConsultantDate,
      receptionDate: data.receptionDate,
      plaintiffId: 1,
      defendantId: 1,
      areaId: data.area,
      matterId: data.matter,
      originId: data.origin,
      receivedCase:
        data.receivedCase === "Si"
          ? true
          : data.receivedCase === "No"
          ? false
          : null,
      studentRecepcionistId: 1,
      studentRecepcionistCapacityId: data.studentRecepcionistCapacity,
      attentionPlaceId: data.attentionPlace,
      studentAssigneeId: 1,
      studentAssigneeCapacityId: data.studentAsigneeCapacity,
      appointmentDateByUser:
        data.appointmentDateByUser === "Si"
          ? true
          : data.appointmentDateByUser === "No"
          ? false
          : null,
      individualParticipationId: data.individualParticipation === "Si" ? 1 : 2,
      advisorId: 1,
      thirdPartyRepresentationId: data.thirdPartyRepresentation,
      audienceDateTime: `${data.audienceDateTime}T${data.audienceTime}:02.000Z`,
      audienceResultId: data.audienceResult,
      caseStatusId: data.caseStatus,
      receiverStudentId: 1,
      studentPeacefulCertificate:
        data.studentPeaceFulCertificate === "Si"
          ? true
          : false,
      graphicSupportId: data.graphicSupport,
    };
    updateCases(id, body).then(res =>{
      res[0] === 1 &&  alert("success", "Cambios guardados");
      res.name === "AxiosError" &&  alert("error", "Error al guardar");
    });
  };

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
      <Link to={"/Casos"}>
        <CgClose
          style={{
            fontSize: 35,
            position: "absolute",
            right: 15,
            top: 15,
            cursor: "pointer",
            color: "#000000",
          }}
        />
      </Link>

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
          Caso: {data.id}
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
        <Grid
        md={5}
        xs={11}
        >
          <Typography variant="h4">Asignar estudiante</Typography>

          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Nombre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={data.studentAssignee}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              name="studentAssignee"
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid
           md={5}
           xs={11}
        >
          <Typography variant="h4">Asignar asesor</Typography>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Nombre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={data.advisor}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              name="advisor"
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
          md={5}
          xs={11}
          style={{
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
            disabled
          />
        </Grid>

        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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
          md={5}
          xs={11}
          style={{
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
          md={5}
          xs={11}
          style={{
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
            type="date"
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
          md={5}
          xs={11}
          style={{
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
            type="date"
          />
        </Grid>

        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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
          md={5}
          xs={11}
          style={{
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
          md={5}
          xs={11}
          style={{
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
              <InputLabel id="demo-simple-select-label">Área</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={data.area}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="area"
              >
                {area.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
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
          md={5}
          xs={11}
          style={{
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
                {materia.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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
                {origen.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
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
          md={5}
          xs={11}
          style={{
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
          md={5}
          xs={11}
          style={{
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
          md={5}
          xs={11}
          style={{
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
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Lugar de ateción
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={data.attentionPlace}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              name="attentionPlace"
            >
              {attentionPlace.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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
                {calidad.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
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
          md={5}
          xs={11}
          style={{
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
            value={data.studentAssignee}
            name="studentAssignee"
            disabled
          />
        </Grid>

        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Calidad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={data.studentAsigneeCapacity}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              name="studentAsigneeCapacity"
            >
              {calidad.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          md={5}
          xs={11}
          style={{
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
            FECHA DE CITACION DE PARTE USUARIO
          </Typography>
          <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">
                Fecha de participación de usuario
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={data.appointmentDateByUser}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="appointmentDateByUser"
              >
                {recepcion.map((name) => (
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
          md={5}
          xs={11}
          style={{
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
                {recepcion.map((name) => (
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
          md={5}
          xs={11}
          style={{
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
          md={5}
          xs={11}
          style={{
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
                Representación a terceros
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
                {representacionTerceros.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
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
          md={5}
          xs={11}
          style={{
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
            type="date"
          />
        </Grid>

        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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
            type="time"
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
          md={5}
          xs={11}
          style={{
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
                {resultadoAudiencia.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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
          <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">ESTADO DEL PROCESO O RESULTADO DEL PROCESO</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={data.caseStatus}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="caseStatus"
              >
                {estadoCaso.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
          md={5}
          xs={11}
          style={{
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
          md={5}
          xs={11}
          style={{
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
          <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-label">
              PAZ Y SALVO DE ESTUDIANTE EN CONSULTORIO
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-label"
                value={data.studentPeaceFulCertificate}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                name="studentPeaceFulCertificate"
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
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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
              {graficar.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid
          container
          className="container"
          md={5}
          xs={11}
          style={{
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

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to={"/Casos"}>
          <Button
            onClick={() => {
              updateCase();
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
        </Link>

        <Link to={"/Casos"}>
          <Button
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
        </Link>
      </Grid>
    </Grid>
  );
};
