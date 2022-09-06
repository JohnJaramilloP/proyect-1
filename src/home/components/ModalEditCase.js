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

const ModalEditCase = ({ add, setAdd, addDepartment }) => {
 
  const [valueCase, setValueCase] = useState({ nombre: "Nombre" });

  const defaultOptions = {
    options: personas.length > 0 ? personas : [],
    getOptionLabel: (options) => options.nombre,
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValueCase((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Caso Editado",
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

  return (
    <Modal isOpen={add} centered>
      <ModalHeader>
        <div>
          <h3>Editar caso</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <label>Busca el nombre:</label>
        <Autocomplete
          {...defaultOptions}
          multiple={false}
          id="controlled-demo"
          value={typeof valueCase !== "object" ? { nombre: "" } : valueCase}
          onChange={(event, newValue) => {
            console.log("new value", newValue)
            let value =
              newValue !== null || undefined ? newValue : { nombre: "" };
            setValueCase(value);
          }}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="Nombre" variant="outlined" />
          )}
        />
        {valueCase.nombre === "Nombre" ? (
          ""
        ) : valueCase.nombre === "" ? (
          ""
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
            <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            value={valueCase.nombre}
            name="nombre"
            onChange={handleChangeEdit}
          />
            <Typography variant="h6">Cédula:</Typography>
            <TextField
            id="outlined-basic"
            label="Cédula"
            variant="outlined"
            value={valueCase.cedula}
            name="cedula"
            onChange={handleChangeEdit}
          />
            <Typography variant="h6">Estrato:</Typography>
            <TextField
            id="outlined-basic"
            label="Estrato"
            variant="outlined"
            value={valueCase.estrato}
            name="estrato"
            onChange={handleChangeEdit}
          />
          </Grid>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => (showAlert(), setAdd())}>
          Editar
        </Button>
        <Button color="danger" onClick={() => setAdd()}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalEditCase;
