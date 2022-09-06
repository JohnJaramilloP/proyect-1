import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Swal from "sweetalert2";

const {
  idTypes,
  updatePeople,
  createPeople,
  deletePeople,
} = require("../components/services.js");

const ModalCreatePerson = ({ add, setAdd }) => {
  const [valueInput, setValueInput] = useState({
    name: "",
    lastName1: "",
    lastName2: "",
    idNumber: "",
    idTypeId: "",
    email: "",
    tel: "",
    birthdate: "",
  });
  const [idTypeSelectItems, setIdTypeSelectItems] = useState([]);

  useEffect(() => {
    idTypes().then((id) => {
      setIdTypeSelectItems(id);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createPerson = () => {
    if (valueInput.name !== "") {
      let name = valueInput.name;
      let lastName1 = valueInput.lastName1;
      let lastName2 = valueInput.lastName1;
      let idTypeId = valueInput.idTypeId;
      let idNumber = valueInput.idNumber;
      let email = valueInput.email;
      let tel = valueInput.tel;
      let birthdate = valueInput.birthdate ? valueInput.birthdate : null;

      createPeople(
        name,
        lastName1,
        lastName2,
        idTypeId,
        idNumber,
        email,
        tel,
        birthdate
      ).then((e) => console.log("res create", e));
    }
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
    <Modal
      isOpen={add}
      centered
      style={{
        top: 100,
      }}
    >
      <ModalHeader>
        <div>
          <h3>Crear nueva persona</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <label>Nombres</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={valueInput.name}
          onChange={handleChange}
          title="Este campo es requerido"
          required
        />
        <label>Apellido1</label>
        <input
          className="form-control"
          type="text"
          name="lastName1"
          value={valueInput.lastName1}
          onChange={handleChange}
          title="Este campo es requerido"
          required
        />

        <label>Apellido2</label>
        <input
          className="form-control"
          type="text"
          name="lastName2"
          value={valueInput.lastName2}
          onChange={handleChange}
          title="Este campo es requerido"
          required
        />

        <label
          style={{
            marginTop: "5px",
          }}
        >
          Tipo de documento
        </label>
        <br />
        <select
          placeholder="Elige el tipo de documento"
          name="idTypeId"
          value={valueInput.idTypeId}
          onChange={handleChange}
          style={{
            width: "100%",
            height: "40px",
            border: "1px solid #00000030",
            borderRadius: 5,
          }}
        >
          {idTypeSelectItems.map((e) => (
            <option value={e.id}>{e.name}</option>
          ))}
        </select>
        <br />

        <label>Cédula</label>
        <input
          className="form-control"
          type="text"
          name="idNumber"
          value={valueInput.idNumber}
          onChange={handleChange}
          title="Este campo es requerido"
          required
        />

        <label>Correo</label>
        <input
          className="form-control"
          type="text"
          name="email"
          value={valueInput.email}
          onChange={handleChange}
        />

        <label>Teléfono</label>
        <input
          className="form-control"
          type="text"
          name="tel"
          value={valueInput.tel}
          onChange={handleChange}
        />

        <label>Fecha de nacimineto</label>
        <input
          className="form-control"
          type="text"
          name="birthdate"
          value={valueInput.birthdate}
          onChange={handleChange}
        />
        <form
          action="../../form-result.php"
          method="post"
          enctype="multipart/form-data"
          target="_blank"
        ></form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => (showAlert(), setAdd(), createPerson())}
        >
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
