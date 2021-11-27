const { Router } = require('express');
const { User } = require('../../db')
const router = Router();
const {createUser, getAllUsers, getSpeficicUser, createRoutine, getRoutine, deleteRoutine, updateRoutine, modifyUser} = require('../Controllers/User')

router.post('/register_user', createUser )
router.get('/', getAllUsers )
router.put('/:id', modifyUser )
router.get('/:id', getSpeficicUser )
router.post('/traine_plan/:id', createRoutine)
router.get('/traine_plan/:id', getRoutine)
router.delete('/traine_plan/:id', deleteRoutine)
router.put('/traine_plan/:id/:prop', updateRoutine)


module.exports = router;

