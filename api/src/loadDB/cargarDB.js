const axios = require("axios");
const { Country, Activity } = require("../db.js");

const borrarCaracter = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036fÅ]/g, ""); // elimino acentos y caracter Å
};

//traer la info de la API (de forma asíncrona)
const getApiInfo = async () => {
  try {
    const url = "https://restcountries.com/v3/all";
    const response = await axios.get(url);

    const countriesMapeo = response.data.map((el) => {
      return {
        id: el.cca3,
        name: el.name.common,
        flag: el.flags[1],
        continent: el.region,
        subregion: el.subregion,
        capital: el.capital ? el.capital : "Capital no encontrada",
        population: el.population,
        area: el.area,
      };
    });

    await Country.bulkCreate(countriesMapeo);
  } catch (error) {
    console.log(error + " <======= ES EN EL LLAMADO A LA API");
  }
};

module.exports = {
  getApiInfo,
};
