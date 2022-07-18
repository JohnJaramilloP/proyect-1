import React from "react";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Swal from "sweetalert2";

const ModalCreatePerson = ({ add, setAdd, addDepartment }) => {
  const [valueInput, setValueInput] = useState({
    nombre:"",
    cedula:"",
    estrato: "",
    documentacion:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Persona Agregada",
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
          <h3>Crear nueva persona</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <label>Nombres y apellidos</label>
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

export default ModalCreatePerson;
