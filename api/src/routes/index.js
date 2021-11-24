const { Router } = require('express');


const eventRoute = require('./Routes/Event');
const exerciseRoute = require('./Routes/Exercise');
const routineRoute = require('./Routes/Routine');
const timetableRoute = require('./Routes/Timetable');
const userRoute = require('./Routes/User');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();


router.use('/api/event' , eventRoute)
router.use('/api/exercises' , exerciseRoute)
router.use('/api/routines' , routineRoute)
router.use('/api/timetables' , timetableRoute)
router.use('/api/users' , userRoute)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
