const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");

//llamado a todos los países
const getCountries = async () => {
  try {
    const countries = await Country.findAll({
      attributes: ["id", "name", "flag", "continent", "population"],
    });
    return countries;
  } catch (error) {
    console.log(error);
  }
};

//paises por nombre
const getCountriesByName = async (name) => {
  try {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ["id", "name", "flag", "continent", "population"],
    });
    if (!countries) {
      res.status(404).send("País no encontrado");
    }
    return countries;
  } catch (error) {
    throw error;
  }
};

//busqueda de país por id
const getCountryById = async (id) => {
  try {
    const country = await Country.findByPk(id.toUpperCase(), {
      attributes: [
        "id",
        "name",
        "flag",
        "continent",
        "capital",
        "subregion",
        "population",
        "area",
      ],
      include: [
        {
          model: Activity,
          attributes: ["id", "name", "difficulty", "duration", "season"],
        },
      ],
    });
    if (!country) {
      throw new Error("Id del país, no encontrado");
    }
    return country;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCountries,
  getCountriesByName,
  getCountryById,
};
