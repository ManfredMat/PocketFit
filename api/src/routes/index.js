const eventRoute = require("./Routes/Event");
const exerciseRoute = require("./Routes/Exercise");
const routineRoute = require("./Routes/Routine");
const timetableRoute = require("./Routes/Timetable");
const userRoute = require("./Routes/User");
const loginRoute = require("./Routes/Login");
const logoutRoute = require("./Routes/Logout");
const blockRoute = require('./Routes/Block');
const weekplanRoute = require("./Routes/WeekPlan");
const shiftRoute = require('./Routes/Shift');
const paypalRoutes = require('./Routes/Paypal')

const { Router } = require("express");

const router = Router();


router.use('/api/events' , eventRoute);
router.use('/api/exercises' , exerciseRoute);
router.use('/api/routines' , routineRoute);
router.use('/api/timetables' , timetableRoute);
router.use('/api/users' , userRoute);
router.use('/api/blocks' , blockRoute);
router.use("/api/login", loginRoute);
router.use("/api/weekplan", weekplanRoute);
router.use("/api/logout", logoutRoute);
router.use('/api/shift', shiftRoute);
router.use('/api/paypal', paypalRoutes)


module.exports = router;
