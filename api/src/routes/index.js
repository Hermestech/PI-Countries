const { Router } = require('express');
const countryRoute = require('./country');
const activityRoute = require('./activity');
const search = require('./searchAct');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countryRoute)
router.use('/activity', activityRoute)
router.use('/search', search)

module.exports = router;
