// const URL = "http://localhost:8000/api/";
const URL = "https://consultorio-juridico.herokuapp.com/api/";

const axios = require("axios").default;

axios.defaults.withCredentials = true

let CircularJSON = require("circular-json");

// Casos

export async function cases(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "cases", {
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

export async function casesId(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "cases/" + id, {
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


export async function createCases(body, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "cases", body, {
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

export async function updateCases(id, body, tokken) {
  return new Promise((resolve, reject) => {
    axios
    .put(URL + "cases/" + id, body, {
      headers: {
        'Authorization': `Bearer ${tokken}`
      }
    })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteCases(id, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "cases/" + id, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Subir Archivos

export async function uploadFile (id, files, tokken) {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append(`file[${i}]`, files[i])
  };
  formData.append('caseId', id);
  return new Promise((resolve, reject) => {
  axios.post(URL + "files/", formData, {
    headers: {
      'Authorization': `Bearer ${tokken}`
    }
  })
  .then(function (response) {
    resolve(response);
  })
  .catch(function (error) {
    console.log(error);
    resolve(error);
  });
  });
}

export async function uploadFileSimple (body, tokken) {
  return new Promise((resolve, reject) => {
  axios.post(URL + "files/db", body, {
    headers: {
      'Authorization': `Bearer ${tokken}`
    }
  })
  .then(function (response) {
    resolve(response);
  })
  .catch(function (error) {
    console.log(error);
    resolve(error);
  });
  });
}

export async function deleteFile(id, url, tokken) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "files/" + id + "?url=" + url, {
        headers: {
          'Authorization': `Bearer ${tokken}`
        }
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

// Login

export async function login(user, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "login",{
        username: user,
        pwd: password
    })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function loginRefresh() {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "refresh")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

// Casos Asignados Estudiante

export async function assignedCasesEstudent(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "student-assigned-cases", {
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

// Casos Asignados Asesor

export async function assignedCasesAdvisor(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "advisor-assigned-cases", {
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

// Casos Recepcionados Estudiante

export async function receivedCases(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "received-cases", {
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

// Lista de Estudiantes

export async function estudentsList(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "student-people", {
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

// Lista de Asesores

export async function advisorsList(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "advisor-people", {
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

// Lista de estudiantes asociados a un Asesor

export async function advisorEstudentsList(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "advisor-student-people", {
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

// Opciones de menu

export async function menuOptions(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "menu-options", {
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

// Verificar URL

export async function checkUrl(tokken, path) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "menu-options", {
        headers: {
          'Authorization': `Bearer ${tokken}`
        },
        params: {
          'url': path
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

// Personas creadas por estudiante

// Opciones de menu

export async function peopleToEstudents(tokken) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "people-to-students", {
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