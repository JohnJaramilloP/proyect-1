const URL = "http://localhost:8000/api/";

const axios = require("axios").default;

let CircularJSON = require("circular-json");


// Casos

export async function cases() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "cases")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function casesId(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(URL + "cases/" + id)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}


export async function createCases(body) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + "cases", body)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}

export async function updateCases(id, body) {
  return new Promise((resolve, reject) => {
    axios
    .put(URL + "cases/" + id, body)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function deleteCases(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "cases/" + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}

export async function uploadFile (id, files) {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append(`file[${i}]`, files[i])
  };
  formData.append('caseId', id);
  return new Promise((resolve, reject) => {
  axios.post(URL + "files/", formData)
  .then(function (response) {
    resolve(response);
  })
  .catch(function (error) {
    console.log(error);
    resolve(error);
  });
  });
}

export async function deleteFile(id, name) {
  return new Promise((resolve, reject) => {
    axios
      .delete(URL + "files/" + id + "?fileName=" + name)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}
