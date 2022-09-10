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
        // console.log(CircularJSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
}
