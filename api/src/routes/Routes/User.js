const { Router } = require('express');
const { User } = require('../../db')
const router = Router();
const {createUser, getAllUsers, getSpeficicUser, createRoutine, getRoutine, deleteRoutine, updateRoutine} = require('../Controllers/User')

router.post('/register_user', createUser )
router.get('/', getAllUsers )
router.get('/:id', getSpeficicUser )
router.post('/traine_plan', createRoutine)
router.get('/traine_plan/:id', getRoutine)
router.delete('/traine_plan/:name', deleteRoutine)
router.put('/traine_plan/:id/:prop', updateRoutine)


module.exports = router;

