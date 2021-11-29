const { Router } = require('express');
const {getAllRoutines , createRoutine , updateRoutineProp , removeRoutine  , getOneRoutine} = require('../Controllers/Routine');
const router = Router();

router.get('/all',getAllRoutines)

router.get('/:id',getOneRoutine)

router.post('/',createRoutine)

router.put('/:id/:prop' , updateRoutineProp)

router.delete('/remove/:id', removeRoutine)


module.exports = router;