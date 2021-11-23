const { Router } = require('express');

const eventRoute = require('./Event');
const exerciseRoute = require('./Exercise');
const routineRoute = require('./Routine');
const timetableRoute = require('./Timetable');
const userRoute = require('./User');



const router = Router();

router.use('/api' , eventRoute)
router.use('/api' , exerciseRoute)
router.use('/api' , routineRoute)
router.use('/api' , timetableRoute)
router.use('/api' , userRoute)

module.exports = router;
