import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Swal from "sweetalert2";
import { Grid, Typography } from "@mui/material";

const personas = [
  { cedula: "10897846344", nombre: "juan García", estrato: 2 },
  { cedula: "24345465", nombre: "Alfredo García", estrato: 3 },
  { cedula: "5647395", nombre: "Carmen Jaramillo", estrato: 2 },
  { cedula: "1078564736", nombre: "Ester Mejía", estrato: 1 },
  { cedula: "345876967", nombre: "Carlos Hoyos", estrato: 2 },
  { cedula: "1178463524", nombre: "Andrea Restrepo", estrato: 4 },
  { cedula: "34576857", nombre: "Daniela Uribe", estrato: 2 },
];

const ModalCreateCase = ({ add, setAdd, addDepartment }) => {
  const [valueInput, setValueInput] = useState({
    nombre: "",
    cedula: "",
    estrato: "",
    documentacion: "",
  });
  const [valueCase, setValueCase] = useState({ cedula: "Documento" });

  const defaultOptions = {
    options: personas.length > 0 ? personas : [],
    getOptionLabel: (options) => options.cedula,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Caso Agregado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const showAlertRequiere = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Los campos Código y Departamento son requeridos",
    });
  };

  console.log(valueCase);

  return (
    <Modal isOpen={add} centered>
      <ModalHeader>
        <div>
          <h3>Crear nuevo caso</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <label>Busca el documento:</label>
        <Autocomplete
          {...defaultOptions}
          multiple={false}
          id="controlled-demo"
          value={typeof valueCase !== "object" ? { cedula: "" } : valueCase}
          onChange={(event, newValue) => {
            let value =
              newValue !== null || undefined ? newValue : { cedula: "" };
            setValueCase(value);
          }}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="Documento" variant="outlined" />
          )}
        />
        {valueCase.cedula === "Documento" ? (
          ""
        ) : valueCase.cedula === "" ? (
          <Grid
            container
            sx={{
              marginTop: 2,
            }}
          >
            <label>nombres y apellidos</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={valueInput.nombre}
              onChange={handleChange}
              title="Este campo es requerido"
              required
            />

            <label>Cédula</label>
            <input
              className="form-control"
              type="text"
              name="cedula"
              value={valueInput.cedula}
              onChange={handleChange}
              title="Este campo es requerido"
              required
            />

            <label>Estrato</label>
            <input
              className="form-control"
              type="text"
              name="estrato"
              value={valueInput.estrato}
              onChange={handleChange}
              title="Este campo es requerido"
              required
            />

            <label>Trae documentación</label>
            <input
              className="form-control"
              type="text"
              name="documentacion"
              value={valueInput.documentacion}
              onChange={handleChange}
              title="Este campo es requerido"
              required
            />
            <form
              action="../../form-result.php"
              method="post"
              enctype="multipart/form-data"
              target="_blank"
            >
              <p>Sube la documentación: </p>
              <input type="file" name="archivosubido" />
              <br />
              {/* <input type="submit" value="Enviar datos" /> */}
            </form>
          </Grid>
        ) : (
          <Grid 
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
          >
            <Typography variant="h6">Nombre y apellidos:</Typography>
            <Typography>{valueCase.nombre}</Typography>
            <Typography variant="h6">Cédula:</Typography>
            <Typography>{valueCase.cedula}</Typography>
            <Typography variant="h6">Estrato:</Typography>
            <Typography>{valueCase.estrato}</Typography>

            <form
              action="../../form-result.php"
              method="post"
              enctype="multipart/form-data"
              target="_blank"
            >
              <p>Sube la documentación: </p>
              <input type="file" name="archivosubido" />
              <br />
              {/* <input type="submit" value="Enviar datos" /> */}
            </form>
          </Grid>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => (showAlert(), setAdd())}>
          Agregar
        </Button>
        <Button color="danger" onClick={() => setAdd()}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalCreateCase;
