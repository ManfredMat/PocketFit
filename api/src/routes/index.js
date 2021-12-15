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
const resetpasswordRoutes = require('./Routes/ResetPassword')
const newsletterRoutes = require('./Routes/Newsletter')
const reviewRoutes = require('./Routes/Review')
const notificationRoutes =require('./Routes/Notification')
// const mercadoPago = require('./Routes/MercadoPago')


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
router.use('/api/resetpassword' , resetpasswordRoutes)
router.use('/api/news',newsletterRoutes)
router.use('/api/reviews',reviewRoutes)
router.use('/api/notification' , notificationRoutes)
// router.use('/api/mercadopago')

module.exports = router;
