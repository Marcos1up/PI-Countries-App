
const { Activity, Country } = require("../db");




const postActivity = async (req, res) => {
    const { name, duration, difficulty } = req.body

    try {
        if(!name || !duration || !difficulty){
            res.status(404).send('Faltan agregar datos obligatorios, amigo')
        }
        const activity = await Activity.create(req.body)
        res.status(200).send(activity)
    } catch (err) {
        //console.log(err)
        res.status(400).send('TODO LO QUE PODIA SALIR MAL, SALIO MAL CAPO')
    }
};

module.exports = {
    postActivity
};