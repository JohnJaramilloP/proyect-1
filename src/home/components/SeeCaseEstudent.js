import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, ImageListItem, TextField, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import { CgClose } from "react-icons/cg";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import { Delete, Add, Edit } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import SelectSeeCase from "./SelectSeeCase";
import TextfieldDate from "./TextfieldDate";
import Textfield from "./Textfield";
import AuthContext from "../../auth/context/AuthContext";
import { ModalAddPerson } from "./ModalAddPerson";
import SimpleFileUpload from "react-simple-file-upload";
import archivoCargado from "../../assets/images/archivo_cargado.PNG";

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
  people,
} = require("../components/services");

const {
  casesId,
  updateCases,
  uploadFile,
  deleteFile,
  estudentsList,
  advisorsList,
  uploadFileSimple,
} = require("../components/servicesCases.js");

const recepcion = ["Si", "No"];

const pazSalvo = ["Si", "No"];

const representacionTerceros = [
  { id: 1, name: "ASESORIA" },
  { id: 2, name: "ELABORACION DE DEMANDA" },
  { id: 3, name: "CONTESTACION DE DEMANDA" },
  { id: 4, name: "ACCION CONSTITUCIONAL" },
  { id: 5, name: "REPRESANTACION A TERCEROS" },
];

export const SeeCaseEstudent = () => {
  const { id } = useParams();

  const { auth, handleAuth } = useContext(AuthContext);

  const [data, setData] = useState({
    id: "",
    year: "",
    internalNumber: "",
    attentionConsultantDate: "",
    receptionDate: "",
    plaintiff: "",
    plaintiffName: "",
    defendant: "",
    defendantName: "",
    area: "",
    origin: "",
    matter: "",
    receivedCase: "",
    studentRecepcionist: "",
    studentRecepcionistCapacity: "",
    attentionPlace: "",
    studentAssignee: "",
    studentAssigneeName: "",
    studentAsigneeCapacity: "",
    appointmentDateByUser: "",
    individualParticipation: "",
    advisor: "",
    advisorName: "",
    thirdPartyRepresentation: "",
    audienceDateTime: "",
    audienceTime: "",
    audienceResult: "",
    caseStatus: "",
    receiverStudent: "",
    receiverStudentName: "",
    studentPeacefulCertificate: "",
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
  const [cantidad, setCantidad] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  const [estudents, setEstudents] = useState([]);
  const [advisors, setAdvisors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nameValue, setNameValue] = useState({});
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    casesId(id, auth.tokken).then((_case) => {
      console.log("datassss", _case);
      setData({
        id: _case.id && _case.id,
        year: _case.year && _case.year,
        internalNumber: _case.internalNumber && _case.internalNumber,
        attentionConsultantDate:
          _case.attentionConsultantDate && _case.attentionConsultantDate,
        receptionDate: _case.receptionDate && _case.receptionDate,
        plaintiff: _case.plaintiff && _case.plaintiff.id,
        plaintiffName:
          _case.plaintiff &&
          _case.plaintiff.name +
            " " +
            (_case.plaintiff.lastName1 === null
              ? ""
              : _case.plaintiff.lastName1) +
            " " +
            (_case.plaintiff.lastName2 === null
              ? ""
              : _case.plaintiff.lastName2),
        defendant: _case.defendant && _case.defendant.id,
        defendantName:
          _case.defendant &&
          _case.defendant.name +
            " " +
            (_case.defendant.lastName1 === null
              ? ""
              : _case.defendant.lastName1) +
            " " +
            (_case.defendant.lastName2 === null
              ? ""
              : _case.defendant.lastName2),
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
        studentAssignee: _case.studentAssignee && _case.studentAssignee.id,
        studentAssigneeName:
          _case.studentAssignee &&
          _case.studentAssignee.name +
            " " +
            (_case.studentAssignee.lastName1 === null
              ? ""
              : _case.studentAssignee.lastName1) +
            " " +
            (_case.studentAssignee.lastName2 === null
              ? ""
              : _case.studentAssignee.lastName2),
        studentAsigneeCapacity:
          _case.studentAssigneeCapacity && _case.studentAssigneeCapacity.id,
        appointmentDateByUser:
          _case.appointmentDateByUser && _case.appointmentDateByUser === true
            ? "Si"
            : "No",
        individualParticipation:
          _case.individualParticipation && _case.individualParticipation.name,
        advisor: _case.advisor && _case.advisor.id,
        advisorName:
          _case.advisor &&
          _case.advisor.name +
            " " +
            (_case.advisor.lastName1 === null ? "" : _case.advisor.lastName1) +
            " " +
            (_case.advisor.lastName2 === null ? "" : _case.advisor.lastName2),
        thirdPartyRepresentation:
          _case.thirdPartyRepresentation && _case.thirdPartyRepresentation.id,
        audienceDateTime:
          _case.audienceDateTime && _case.audienceDateTime.substring(0, 10),
        audienceTime:
          _case.audienceDateTime && _case.audienceDateTime.substring(11, 16),
        audienceResult: _case.audienceResult && _case.audienceResult.id,
        caseStatus: _case.caseStatus && _case.caseStatus.id,
        receiverStudent: _case.receiverStudent && _case.receiverStudent.id,
        receiverStudentName:
          _case.receiverStudent &&
          _case.receiverStudent.name +
            " " +
            (_case.receiverStudent.lastName1 === null
              ? ""
              : _case.receiverStudent.lastName1) +
            " " +
            (_case.receiverStudent.lastName2 === null
              ? ""
              : _case.receiverStudent.lastName2),
        studentPeacefulCertificate:
          _case.studentPeacefulCertificate &&
          _case.studentPeacefulCertificate === true
            ? "Si"
            : "No",
        graphicSupport: _case.graphicSupport && _case.graphicSupport.id,
        files: _case.files && _case.files,
      });
    });
  }, [reloadData]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name);
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleChangePersons = (name, value, name2, value2) => {
    setData({
      ...data,
      [name]: value,
      [name2]: value2,
    });
  };

  function handleFile(url) {
    console.log("The URL of the file is " + url);
    let body = {
      url: url,
      caseId: id,
    };
    uploadFileSimple(body, auth.tokken);
  }

  const roleId = localStorage.getItem("role");

  useEffect(() => {
    areas(auth.tokken).then((areas) => {
      setArea(areas);
    });
    attentionPlaces(auth.tokken).then((places) => {
      setattentionPlace(places);
    });
    origins(auth.tokken).then((origen) => {
      setOrigen(origen);
    });
    caseStatuses(auth.tokken).then((estado) => {
      setEstadoCaso(estado);
    });
    capacities(auth.tokken).then((calidad) => {
      setCalidad(calidad);
    });
    subjectMatters(auth.tokken).then((materia) => {
      setMateria(materia);
    });
    audienceResults(auth.tokken).then((resultado) => {
      setResultadoAudiencia(resultado);
    });
    graphicSupportOptions(auth.tokken).then((res) => {
      setGraficar(res);
    });
    people(auth.tokken).then((people) => {
      setPeopleList(people);
    });
    estudentsList(auth.tokken).then((estudents) => {
      setEstudents(estudents);
    });
    advisorsList(auth.tokken).then((advisors) => {
      setAdvisors(advisors);
    });
  }, []);

  const updateCase = () => {
    let body = {
      socioeconomicLevel: data.socioeconomicLevel,
      year: data.year,
      internalNumber: data.internalNumber,
      attentionConsultantDate: data.attentionConsultantDate,
      receptionDate: data.receptionDate,
      plaintiffId: data.plaintiff,
      defendantId: data.defendant,
      areaId: data.area,
      matterId: data.matter,
      originId: data.origin,
      receivedCase:
        data.receivedCase === "Si"
          ? true
          : data.receivedCase === "No"
          ? false
          : null,
      // studentRecepcionistId: data.studentRecepcionist,
      studentRecepcionistCapacityId: data.studentRecepcionistCapacity,
      attentionPlaceId: data.attentionPlace,
      studentAssigneeId: data.studentAssignee,
      studentAssigneeCapacityId: data.studentAsigneeCapacity,
      appointmentDateByUser:
        data.appointmentDateByUser === "Si"
          ? true
          : data.appointmentDateByUser === "No"
          ? false
          : null,
      individualParticipationId: data.individualParticipation === "Si" ? 1 : 2,
      advisorId: data.advisor,
      thirdPartyRepresentationId: data.thirdPartyRepresentation,
      audienceDateTime: data.audienceDateTime
        ? `${data.audienceDateTime}T${data.audienceTime}:02.000Z`
        : null,
      audienceResultId: data.audienceResult,
      caseStatusId: data.caseStatus,
      receiverStudentId: data.receiverStudent,
      studentPeacefulCertificate:
        data.studentPeacefulCertificate === "Si"
          ? true
          : data.studentPeacefulCertificate === "No"
          ? false
          : null,
      graphicSupportId: data.graphicSupport,
    };
    updateCases(id, body, auth.tokken).then((res) => {
      console.log("update res", res);
      let id = data.id;
      if (res[0] === 1) {
        uploadFile(id, fileUp, auth.tokken).then((res) =>
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

  console.log("data", data, "paz y salvo", data.studentPeacefulCertificate);

  return (
    <Grid
      container
      style={{
        width: "100%",
        padding: 10,
        position: "relative",
      }}
    >
      <Link
        to={roleId === "1" ? "/Casos_Asignados" : "/Casos_Asignados_asesor"}
      >
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
        <Textfield data={data.id} name="id" label="NÚMERO" disabled={true} />

        <Textfield
          data={data.year}
          name="year"
          label="AÑO"
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
        <Textfield
          data={data.internalNumber}
          name="internalNumber"
          label="RADICADO INTERNO"
          onChangeValue={handleChange}
        />

        <Textfield
          data={data.attentionConsultantDate}
          name="attentionConsultantDate"
          label="FECHA DE ATENCIÓN Y ASESORIA"
          disabled={true}
        />

        {/* <TextfieldDate
          data={data.attentionConsultantDate}
          name="attentionConsultantDate"
          label="FECHA DE ATENCIÓN Y ASESORIA"
          onChangeValue={handleChange}
        /> */}
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
          <Typography
            variant="p"
            className="title"
            style={{
              marginBottom: 10,
            }}
          >
            PARTE ACCIONANTE
          </Typography>
          <Grid
            style={{
              display: "flex",
            }}
          >
            <TextField
              id="filled-basic"
              variant="filled"
              value={data.plaintiffName}
              name="plaintiff"
              inputProps={{ readOnly: true }}
              style={{
                width: "95%",
              }}
            />
            <Tooltip title="Seleccionar Parte Accionante">
              <Button
                onClick={() => {
                  setShowModal(!showModal);
                  setNameValue({
                    name: "plaintiff",
                    value: data.plaintiff,
                    name2: "plaintiffName",
                    value2: data.plaintiffName,
                  });
                }}
              >
                <Edit />
              </Button>
            </Tooltip>
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
              marginBottom: 10,
            }}
          >
            PARTE ACCIONADA
          </Typography>
          <Grid
            style={{
              display: "flex",
            }}
          >
            <TextField
              id="filled-basic"
              variant="filled"
              value={data.defendantName}
              name="defendant"
              inputProps={{ readOnly: true }}
              style={{
                width: "95%",
              }}
            />
            <Tooltip title="Seleccionar Parte Accionada">
              <Button
                onClick={() => {
                  setShowModal(!showModal);
                  setNameValue({
                    name: "defendant",
                    value: data.defendant,
                    name2: "defendantName",
                    value2: data.defendantName,
                  });
                }}
              >
                <Edit />
              </Button>
            </Tooltip>
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
            label="MATERIA"
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
            <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={data.receivedCase}
                onChange={handleChange}
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
              marginBottom: 10,
            }}
          >
            NOMBRE DEL ESTUDIANTE QUE RECEPCIONO EL CASO
          </Typography>
          <TextField
            id="filled-basic"
            variant="filled"
            value={data.studentRecepcionist}
            name="studentRecepcionist"
            inputProps={{ readOnly: true }}
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
            label="LUGAR DE ATENCIÓN"
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
            label="CALIDAD(E/A) ESTUDIANTE RECEPTOR"
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
            ESTUDIANTE A QUIEN SE LE ASIGNO EL CASO
          </Typography>
          <Grid
            style={{
              display: "flex",
            }}
          >
            <TextField
              id="filled-basic"
              variant="filled"
              value={data.studentAssigneeName}
              name="studentAssignee"
              inputProps={{ readOnly: true }}
              style={{
                width: "100%",
              }}
            />
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
          <SelectSeeCase
            label="CALIDAD (E/A) ESTUDIANTE ASIGNADO"
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
          <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.appointmentDateByUser}
              onChange={handleChange}
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

            <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={data.individualParticipation}
                onChange={handleChange}
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
              marginBottom: 10,
            }}
          >
            NOMBRE DEL ASESOR
          </Typography>
          <Grid
            style={{
              display: "flex",
            }}
          >
            <TextField
              id="filled-basic"
              variant="filled"
              value={data.advisorName}
              name="advisor"
              inputProps={{ readOnly: true }}
              style={{
                width: "100%",
              }}
            />
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
            <Typography variant="p">
              REALIZÓ REPRESENTACION DE TERCEROS
            </Typography>

            <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={data.thirdPartyRepresentation}
                onChange={handleChange}
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
          label="FECHA DE AUDIENCIA (*Es necesario especificar la hora de audiencia)"
          onChangeValue={handleChange}
        />
        <TextfieldDate
          data={data.audienceTime}
          name="audienceTime"
          label="HORA DE AUDIENCIA (*Es necesario especificar la fecha de audiencia)"
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
          <Typography
            variant="p"
            className="title"
            style={{
              marginBottom: 10,
            }}
          >
            ESTUDIANTE QUE RECIBE EL CASO
          </Typography>
          <Grid
            style={{
              display: "flex",
            }}
          >
            <TextField
              id="filled-basic"
              label="ESTUDIANTE QUE RECIBE EL CASO"
              variant="filled"
              value={data.receiverStudentName}
              name="receiverStudent"
              inputProps={{ readOnly: true }}
              style={{
                width: "100%",
              }}
            />
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
            <Typography variant="p">
              PAZ Y SALVO DE ESTUDIANTE EN CONSULTORIO
            </Typography>
            <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={data.studentPeacefulCertificate}
                onChange={handleChange}
                MenuProps={MenuProps}
                name="studentPeacefulCertificate"
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
          <p
            style={{
              fontWeight: 200,
            }}
          >
            Antes de guardar cambios, verificar que los archivos han sido
            cargados correctamente.
          </p>
          <p
            style={{
              fontWeight: 500,
            }}
          >
            Ejemplo de documento cargado correctamente:
          </p>
          <ImageListItem
            variant="standard"
            sx={{
              width: { xs: 60, md: 60 },
              marginLeft: "65px",
            }}
          >
            <img src={archivoCargado} alt="archivo_cargado" />
          </ImageListItem>
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
            <form>
              {cantidad.map((e) => (
                // <input
                //   key={e}
                //   type="file"
                //   name="archivosubido"
                //   onChange={saveFile}
                //   style={{
                //     marginBottom: "10px",
                //     width: "240px",
                //   }}
                // />
                <div
                  style={{
                    display: "inline",
                    margin: "0 10px",
                  }}
                >
                  <SimpleFileUpload
                    apiKey="81696e288998403763177caa00915951"
                    data-preview="true"
                    onSuccess={handleFile}
                    width="60"
                    height="60"
                  />
                </div>
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
                    {e.url && e.url.split("/")[7]}
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
                          confirmButtonColor: "#009929",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteFile(e.id, e.url, auth.tokken).then((res) => {
                              res.status === 204
                                ? alert("success", "Documento eliminado")
                                : alert("error", "Error al eliminar");
                              casesId(id, auth.tokken).then((_case) => {
                                setData({ files: _case.files });
                                setReloadData(!reloadData);
                              });
                            });
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
        <Grid>
          <Button
            onClick={() => {
              updateCase();
              setCantidad([]);
              setFileUp([]);
              casesId(id, auth.tokken).then((_case) => {
                setData({ files: _case.files });
                setReloadData(!reloadData);
              });
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
        </Grid>

        <Grid>
          <Link
            to={roleId === "1" ? "/Casos_Asignados" : "/Casos_Asignados_asesor"}
          >
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

      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ModalAddPerson
            persons={peopleList}
            showModal={setShowModal}
            nameValue={nameValue}
            handleChange={handleChangePersons}
            estudents={estudents}
            advisors={advisors}
          />
        </Modal>
      )}
    </Grid>
  );
};
