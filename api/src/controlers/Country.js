// controladores GET de country

const {
  getCountriesByName,
  getCountryById,
  getCountries,
} = require("./controllersTools");

//========================= /countries    y por query ========================

const getAllCountries = async (req, res) => {
  try {
    const name = req.query.name;
    if (name) {
      const countries = await getCountriesByName(name);
      countries.length
        ? res.status(200).send(countries)
        : res.status(404).send("País no encontrado");
    } else {
      const countries = await getCountries();
      countries.length
        ? res.status(200).json(countries)
        : res.status(404).send("País no encontrado");
    }
  } catch (error) {
    console.log("PROBLEMAS EN EL LLAMADO A LA API POR QUERY");
  }
};

//========================= /countries/:idPais ========================

const getCountriById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await getCountryById(id);
    if (!country) {
      res.sta("No existe un país con esa Id");
    }
    res.json(country);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCountries,
  getCountriById,
};
