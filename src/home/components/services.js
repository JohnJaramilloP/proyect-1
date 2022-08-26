const URL = "http://localhost:8000/api/";

const axios = require("axios").default;

let CircularJSON = require("circular-json");

// Lugares de atención

export async function attentionPlaces() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "attention-places")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createPlace(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "attention-places", {
        name: name,
        description: description,
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

export async function updatePlace(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "attention-places/" + id, elem)
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

export async function deletePlace(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "attention-places/" + id)
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

export async function areas() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "areas")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createArea(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "areas", {
        name: name,
        description: description,
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

export async function updateArea(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "areas/" + id, elem)
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

export async function deleteArea(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "areas/" + id)
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

export async function subjectMatters() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "subject-matters")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createSubjectMatters(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "subject-matters", {
        name: name,
        description: description,
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

export async function updateSubjectMatters(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "subject-matters/" + id, elem)
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

export async function deleteSubjectMatters(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "subject-matters/" + id)
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

export async function origins() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "origins")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createOrigins(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "origins", {
        name: name,
        description: description,
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

export async function updateOrigins(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "origins/" + id, elem)
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

export async function deleteOrigins(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "origins/" + id)
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

export async function capacities() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "capacities")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createCapacities(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "capacities", {
        name: name,
        description: description,
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

export async function updateCapacities(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "capacities/" + id, elem)
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

export async function deleteCapacities(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "capacities/" + id)
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

export async function legalOfficerOptions() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "legal-officer-options")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createLegalOfficerOptions(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "legal-officer-options", {
        name: name,
        description: description,
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

export async function updateLegalOfficerOptions(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "legal-officer-options/" + id, elem)
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

export async function deleteLegalOfficerOptions(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "legal-officer-options/" + id)
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

export async function attentionResults() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "attention-results")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createAttentionResults(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "attention-results", {
        name: name,
        description: description,
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

export async function updateAttentionResults(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "attention-results/" + id, elem)
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

export async function deleteAttentionResults(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "attention-results/" + id)
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

export async function efficacyOptions() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "efficacy-options")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createEfficacyOptions(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "efficacy-options", {
        name: name,
        description: description,
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

export async function updateEfficacyOptions(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "efficacy-options/" + id, elem)
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

export async function deleteEfficacyOptions(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "efficacy-options/" + id)
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

export async function caseStatuses() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "case-statuses")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createCaseStatuses(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "case-statuses", {
        name: name,
        description: description,
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

export async function updateCaseStatuses(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "case-statuses/" + id, elem)
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

export async function deleteCaseStatuses(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "case-statuses/" + id)
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

export async function audienceResults() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "audience-results")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createAudienceResults(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "audience-results", {
        name: name,
        description: description,
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

export async function updateAudienceResults(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "audience-results/" + id, elem)
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

export async function deleteAudienceResults(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "audience-results/" + id)
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

export async function graphicSupportOptions() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "graphic-support-options")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createGraphicSupportOptions(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "graphic-support-options", {
        name: name,
        description: description,
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

export async function updateGraphicSupportOptions(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "graphic-support-options/" + id, elem)
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

export async function deleteGraphicSupportOptions(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "graphic-support-options/" + id)
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

export async function idTypes() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "id-types")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createIdTypes(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "id-types", {
        name: name,
        description: description,
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

export async function updateIdTypes(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "id-types/" + id, elem)
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

export async function deleteIdTypes(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "id-types/" + id)
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

export async function fileTypes() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "file-types")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function createFileTypes(name, description) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "file-types", {
        name: name,
        description: description,
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

export async function updateFileTypes(id, name, description) {
  let elem = {
    name: name,
    description: description,
  };
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "file-types/" + id, elem)
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

export async function deleteFileTypes(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "file-types/" + id)
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

export async function people() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "people")
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
  idTypeId,
  idNumber,
  email,
  tel,
  birthdate
) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "people", {
        name: name,
        lastName1: lastName1,
        idTypeId: idTypeId,
        idNumber: idNumber,
        email: email,
        tel: tel,
        birthdate: birthdate,
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
  idTypeId,
  idNumber,
  email,
  tel,
  birthdate
) {
  return new Promise((resolve, reject) => {
    axios
      .put(URL + "people/" + id, {
        name: name,
        lastName1: lastName1,
        idTypeId: idTypeId,
        idNumber: idNumber,
        email: email,
        tel: tel,
        birthdate: birthdate,
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

export async function deletePeople(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "people/" + id)
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
