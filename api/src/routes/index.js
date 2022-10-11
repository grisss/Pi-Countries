const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerB = require('../Controllers/countries')
const routerA = require('../Controllers/activities')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', routerB)
router.use('/activities', routerA)


module.exports = router;
