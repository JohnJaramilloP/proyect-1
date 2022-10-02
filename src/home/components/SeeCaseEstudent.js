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
import { Delete, Add } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import SelectSeeCase from "./SelectSeeCase";
import TextfieldDate from "./TextfieldDate";
import Textfield from "./Textfield";

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
  casesId,
  updateCases,
  uploadFile,
  deleteFile,
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

const representacionTerceros = [
  { id: 1, name: "ASESORIA" },
  { id: 2, name: "ELABORACION DE DEMANDA" },
  { id: 3, name: "CONTESTACION DE DEMANDA" },
  { id: 4, name: "ACCION CONSTITUCIONAL" },
  { id: 5, name: "REPRESANTACION A TERCEROS" },
];

export const SeeCaseEstudent = () => {
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
    files: [],
  });
  const [fileUp, setFileUp] = useState([]);
  const [area, setArea] = useState([]);
  const [attentionPlace, setattentionPlace] = useState([]);
  const [estadoCaso, setEstadoCaso] = useState([]);
  const [origen, setOrigen] = useState([]);
  const [calidad, setCalidad] = useState([]);
  const [materia, setMateria] = useState([]);
  const [resultadoAudiencia, setResultadoAudiencia] = useState([]);
  const [graficar, setGraficar] = useState([]);
  const [cantidad, setCantidad] = useState([1]);

  useEffect(() => {
    casesId(id).then((_case) => {
      console.log("datassss", _case);
      setData({
        id: _case.id && _case.id,
        year: _case.year && _case.year,
        internalNumber: _case.internalNumber && _case.internalNumber,
        attentionConsultantDate:
          _case.attentionConsultantDate && _case.attentionConsultantDate,
        receptionDate: _case.receptionDate && _case.receptionDate,
        plaintiff: _case.plaintiff && _case.plaintiff.name,
        defendant: _case.defendant && _case.defendant.name,
        area: _case.area && _case.area.id,
        origin: _case.origin && _case.origin.id,
        matter: _case.matter && _case.matter.id,
        receivedCase:
          _case.receivedCase && _case.receivedCase === true ? "Si" : "No",
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
          _case.appointmentDateByUser && _case.appointmentDateByUser === false
            ? "No"
            : "Si",
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
          _case.studentPeaceFulCertificate &&
          _case.studentPeaceFulCertificate === false
            ? "No"
            : "Si",
        graphicSupport: _case.graphicSupport && _case.graphicSupport.id,
        files: _case.files && _case.files,
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
    caseStatuses().then((estado) => {
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
      audienceDateTime: data.audienceDateTime
        ? `${data.audienceDateTime}T${data.audienceTime}:02.000Z`
        : null,
      audienceResultId: data.audienceResult,
      caseStatusId: data.caseStatus,
      receiverStudentId: 1,
      studentPeacefulCertificate:
        data.studentPeaceFulCertificate === "Si" ? true : false,
      graphicSupportId: data.graphicSupport,
    };
    updateCases(id, body).then((res) => {
      let id = data.id;
      if (res[0] === 1) {
        uploadFile(id, fileUp).then((res) =>
          res.status === 200
            ? alert("success", "Cambios guardados")
            : alert("error", "Error al guardar")
        );
      }
    });
  };

  const generarOtroArchivo = () => {
    let numero = cantidad[cantidad.length - 1];
    setCantidad([...cantidad, numero + 1]);
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

  const saveFile = (e) => {
    setFileUp([...fileUp, e.target.files[0]]);
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
      <Link to={"/Casos_Asignados"}>
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Caso: {data.id}</Typography>
      </Grid>

      {/* informacion caso */}

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Textfield data={data.id} name="id" label="Número" disabled={true} />

        <Textfield data={data.year} name="year" label="AÑO" disabled={true} />
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <Textfield
          data={data.internalNumber}
          name="internalNumber"
          label="RADICADO INTERNO"
          onChangeValue={handleChange}
        />
        <TextfieldDate
          data={data.attentionConsultantDate}
          name="attentionConsultantDate"
          label="FECHA DE ATENCIÓN Y ASESORIA"
          onChangeValue={handleChange}
        />
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
        }}
      >
        <TextfieldDate
          data={data.receptionDate}
          name="receptionDate"
          label="FECHA DE RECEPCION DE CASO"
          onChangeValue={handleChange}
        />

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
          <SelectSeeCase
            label="PARTE ACCIONANTE"
            name="plaintiff"
            value={data.plaintiff}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={names}
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
          <SelectSeeCase
            label="PARTE ACCIONADA"
            name="defendant"
            value={data.defendant}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={names}
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
          <SelectSeeCase
            label=" Área (CIVIL, FAMILIA, COMERCIAL, LABORAL, PENAL)"
            name="area"
            value={data.area}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={area}
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
          <SelectSeeCase
            label="Materia"
            name="matter"
            value={data.matter}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={materia}
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
          <SelectSeeCase
            label="ORIGEN (C.J. o EXT)"
            name="origin"
            value={data.origin}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={origen}
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
            <Typography variant="p">SE RECEPCIONó EL CASO</Typography>
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
        <Textfield
          data={data.studentRecepcionist}
          name="studentRecepcionist"
          label="NOMBRE DEL ESTUDIANTE QUE RECEPCIONO EL CASO"
          disabled={true}
        />
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
          <SelectSeeCase
            label="Lugar de ateción"
            name="attentionPlace"
            value={data.attentionPlace}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={attentionPlace}
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
          <SelectSeeCase
            label="CALIDAD(E/A)"
            name="studentRecepcionistCapacity"
            value={data.studentRecepcionistCapacity}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={calidad}
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
        <Textfield
          data={data.studentAssignee}
          name="studentAssignee"
          label=" ESTUDIANTE A QUIEN SE LE ASIGNO EL CASO"
          disabled={true}
        />
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
          <SelectSeeCase
            label="CALIDAD (E/A)"
            name="studentAsigneeCapacity"
            value={data.studentAsigneeCapacity}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={calidad}
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
            <Typography variant="p">TUVO PARTICIPACIÓN INDIVIDUAL </Typography>

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
        <Textfield
          data={data.advisor}
          name="advisor"
          label="NOMBRE DEL ASESOR"
          disabled={true}
        />

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
            <Typography variant="p">
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
                {representacionTerceros.map((option) => (
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
        <TextfieldDate
          data={data.audienceDateTime}
          name="audienceDateTime"
          label=" FECHA DE AUDIENCIA"
          onChangeValue={handleChange}
        />
        <TextfieldDate
          data={data.audienceTime}
          name="audienceTime"
          label="HORA DE AUDIENCIA"
          onChangeValue={handleChange}
          type="time"
        />
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
          <SelectSeeCase
            label="RESULTADO DE LA AUDIENCIA"
            name="audienceResult"
            value={data.audienceResult}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={resultadoAudiencia}
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
          <SelectSeeCase
            label="ESTADO DEL PROCESO O RESULTADO DEL PROCESO"
            name="caseStatus"
            value={data.caseStatus}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={estadoCaso}
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
          <SelectSeeCase
            label="ESTUDIANTE QUE RECIBE EL CASO"
            name="receiverStudent"
            value={data.receiverStudent}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={names}
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
          <SelectSeeCase
            label="APOYO GRAFICAR"
            name="graphicSupport"
            value={data.graphicSupport}
            onChangeValue={handleChange}
            menuProp={MenuProps}
            data={graficar}
          />
        </Grid>

        <Grid
          sx={{
            width: "50%",
          }}
        ></Grid>
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

        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <p>Sube un nuevo documento</p>
            <Button
              style={{
                border: "none",
                width: "50px",
                marginLeft: "70px",
                background: "#009929",
              }}
              onClick={() => generarOtroArchivo()}
            >
              <Add />
            </Button>
            <br />
            <form
              action="../../form-result.php"
              method="post"
              enctype="multipart/form-data"
              target="_blank"
            >
              {cantidad.map((e) => (
                <input
                  key={e}
                  type="file"
                  name="archivosubido"
                  onChange={saveFile}
                  style={{
                    marginBottom: "10px",
                    width: "240px",
                  }}
                />
              ))}
            </form>
          </Grid>

          <Grid
            container
            sx={{
              width: "50%",
              marginTop: 5,
              padding: "0 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {data.files &&
              data.files.map((e) => (
                <Grid
                  md={5}
                  xs={11}
                  item
                  sx={{
                    fontSize: 16,
                    margin: " 5px 0",
                  }}
                >
                  <a href={e.url} download="filename" target="_blank">
                    {e.url.split("_")[2]}
                  </a>
                  <Button
                    style={{
                      marginLeft: 10,
                      background: "#ffffff",
                      border: "none",
                    }}
                  >
                    {" "}
                    <Delete
                      onClick={() => {
                        Swal.fire({
                          title: "Estás seguro de eliminar este documento?",
                          text: "Esto será de forma permanente!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          cancelButtonText: "Cancelar",
                          confirmButtonText: "Sí",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteFile(e.id, e.url.split("/")[4]).then(
                              (res) => {
                                res.status === 204
                                  ? alert("success", "Documento eliminado")
                                  : alert("error", "Error al eliminar");
                                casesId(id).then((_case) =>
                                  setData({ files: _case.files })
                                );
                              }
                            );
                            alert("success", "Documento eliminado");
                          }
                        });
                      }}
                      sx={{
                        color: "#b71c1c",
                      }}
                    />{" "}
                  </Button>
                </Grid>
              ))}
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
        <Link to={"/Casos_Asignados"}>
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
              background: "#009929",
              border: "none",
            }}
          >
            Guardar cambios
          </Button>
        </Link>

        <Link to={"/Casos_Asignados"}>
          <Button
            style={{
              width: "200px",
              height: "50px",
              margin: "10px auto",
              borderRadius: "50px",
              fontSize: 22,
              background: "#8c8c8c",
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
