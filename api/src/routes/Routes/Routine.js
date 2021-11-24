const { Router } = require('express');
const { User } = require('../../db');
const {getAllRoutines , createRoutine , updateRoutineProp , removeRoutine } = require('../Controllers/Routine');
const router = Router();

router.get('/all',getAllRoutines)

router.post('/',createRoutine)

router.put('/:id/:prop' , updateRoutineProp)

router.delete('/remove/:id', removeRoutine)


module.exports = router;