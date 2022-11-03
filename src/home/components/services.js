// const URL = "http://localhost:8000/api/";
const URL = "https://consultorio-juridico.herokuapp.com/api/";

const axios = require("axios").default;

axios.defaults.withCredentials = true

let CircularJSON = require("circular-json");

// Lugares de atención

export async function attentionPlaces(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "attention-places", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createPlace(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "attention-places", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updatePlace(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "attention-places/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deletePlace(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "attention-places/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Áreas

export async function areas(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "areas", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createArea(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "areas", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateArea(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "areas/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteArea(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "areas/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Materia

export async function subjectMatters(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "subject-matters", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createSubjectMatters(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "subject-matters", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateSubjectMatters(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "subject-matters/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteSubjectMatters(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "subject-matters/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Origen

export async function origins(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "origins", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createOrigins(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "origins", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateOrigins(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "origins/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteOrigins(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "origins/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Calidad

export async function capacities(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "capacities", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createCapacities(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "capacities", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateCapacities(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "capacities/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteCapacities(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "capacities/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Funcionario Judicial

export async function legalOfficerOptions(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "legal-officer-options", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createLegalOfficerOptions(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "legal-officer-options", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateLegalOfficerOptions(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "legal-officer-options/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteLegalOfficerOptions(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "legal-officer-options/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Resultado de la atencion

export async function attentionResults(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "attention-results", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createAttentionResults(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "attention-results", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateAttentionResults(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "attention-results/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteAttentionResults(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "attention-results/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Eficacia

export async function efficacyOptions(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "efficacy-options", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createEfficacyOptions(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "efficacy-options", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateEfficacyOptions(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "efficacy-options/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteEfficacyOptions(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "efficacy-options/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Estado de los casos

export async function caseStatuses(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "case-statuses", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createCaseStatuses(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "case-statuses", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateCaseStatuses(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "case-statuses/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteCaseStatuses(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "case-statuses/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Resultado de la audiencia

export async function audienceResults(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "audience-results", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createAudienceResults(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "audience-results", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateAudienceResults(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "audience-results/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteAudienceResults(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "audience-results/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Opciones de soporte gráfico

export async function graphicSupportOptions(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "graphic-support-options", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createGraphicSupportOptions(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "graphic-support-options", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateGraphicSupportOptions(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "graphic-support-options/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteGraphicSupportOptions(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "graphic-support-options/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Tipos de identificación

export async function idTypes(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "id-types", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createIdTypes(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "id-types", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateIdTypes(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "id-types/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteIdTypes(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "id-types/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Tipos de archivo

export async function fileTypes(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "file-types", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createFileTypes(name, description, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "file-types", {
        name: name,
        description: description,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateFileTypes(id, name, description, tokken) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "file-types/" + id, elem, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteFileTypes(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "file-types/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Personas

export async function people(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "people", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createPeople(
  name,
  lastName1,
  lastName2,
  idTypeId,
  idNumber,
  email,
  tel,
  birthdate, 
  tokken
) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "people", {
        name: name,
        lastName1: lastName1,
        lastName2: lastName2,
        idTypeId: idTypeId,
        idNumber: idNumber,
        email: email,
        tel: tel,
        birthdate: birthdate,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updatePeople(
  id,
  name,
  lastName1,
  lastName2,
  idTypeId,
  idNumber,
  email,
  tel,
  birthdate, 
  tokken
) {
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "people/" + id, {
        name: name,
        lastName1: lastName1,
        lastName2: lastName2,
        idTypeId: idTypeId,
        idNumber: idNumber,
        email: email,
        tel: tel,
        birthdate: birthdate,
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deletePeople(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "people/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Usuarios

export async function users(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "users", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error.response);
      });
  });
}

export async function createUsers(
  username,
  pwd,
  roleId,
  personId,
  tokken
) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "users", {
        username: username,
        pwd: pwd,
        roleId: roleId,
        personId: personId
      }, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response));
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateUsers(
  id,
  username,
  roleId,
  tokken,
  pwd
) {
  return new Promise((resolve, reject) => {
    let password = !!pwd && pwd;
    console.log("pwddddd", password)
   if (!!pwd) {
    axios
    .put(URL + "users/" + id, {
      username: username,
      pwd: password,
      roleId: roleId,
    }, {
      headers: {
        'Authorization': `Bearer ${tokken}`
      }
    })
    .then(function (response) {
      // console.log(CircularJSON.stringify(response.data));
      resolve(response.data);
    })
    .catch(function (error) {
      console.log(error);
      resolve(error);
    });
   } else {
    axios
    .put(URL + "users/" + id, {
      username: username,
      roleId: roleId,
    }, {
      headers: {
        'Authorization': `Bearer ${tokken}`
      }
    })
    .then(function (response) {
      // console.log(CircularJSON.stringify(response.data));
      resolve(response.data);
    })
    .catch(function (error) {
      console.log(error);
      resolve(error);
    });
   }
  });
}

export async function deleteUsers(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "users/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}






