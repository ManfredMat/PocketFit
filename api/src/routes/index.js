const { Router } = require('express');

const eventRoute = require('./Routes/Event');
const exerciseRoute = require('./Routes/Exercise');
const routineRoute = require('./Routes/Routine');
const timetableRoute = require('./Routes/Timetable');
const userRoute = require('./Routes/User');
const blockRoute = require('./Routes/Block');


const router = Router();

router.use('/api/events' , eventRoute)
router.use('/api/exercises' , exerciseRoute)
router.use('/api/routines' , routineRoute)
router.use('/api/timetables' , timetableRoute)
router.use('/api/users' , userRoute)
router.use('/api/blocks' , blockRoute)
module.exports = router;
