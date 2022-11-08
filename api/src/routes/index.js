const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getAllCountries, getCountriById } = require('../controlers/Country')
const { postActivity } = require('../controlers/Activity');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', getAllCountries);

router.get("/countries/:id", getCountriById);

router.post('/activities', postActivity);



module.exports = router;