const { Router } = require('express');
const { User } = require('../../db')
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', (req, res, next)=>{
        res.send('post created succs')
} )

module.exports = router;