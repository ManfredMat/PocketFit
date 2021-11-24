const { Router } = require('express');
const {getAllEvents , getOneEvent , createEvent , updateEventProp ,  removeEvent} = require('../Controllers/Event');
const router = Router();

router.get('/all',getAllEvents)

router.get('/:id',getOneEvent)

router.post('/',createEvent)

router.put('/:id/:prop' , updateEventProp)

router.delete('/remove/:id', removeEvent)


module.exports = router;