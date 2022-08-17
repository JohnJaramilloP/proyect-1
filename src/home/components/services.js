const URL_API = "https://api-deparments.herokuapp.com/";
// const URL_API = "https://01e2-173-212-218-56.eu.ngrok.io/";
const axios = require("axios").default;

let CircularJSON = require("circular-json");

export async function ListadoPaises() {
  return new Promise((resolve, reject) => {
    axios
      .get(URL_API + "departments")
      .then(function (response) {
        resolve(response.data.Departamentos);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
}