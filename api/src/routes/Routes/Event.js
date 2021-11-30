const { Router } = require('express');
const {getAllEvents , getOneEvent , createEvent , updateEventProp ,  removeEvent , getEventsByMonth} = require('../Controllers/Event');
const router = Router();
const { Event } = require("../../db.js");

router.get('/all',getAllEvents);

router.get('/:id',getOneEvent);

router.get('/month/:month' , getEventsByMonth);

router.post('/',createEvent);

router.put('/:id/:prop' , updateEventProp);

router.delete('/remove/:id', removeEvent);
router.post('/bulk', async (req, res) => {
    res.json(await Event.bulkCreate(req.body))
  });

module.exports = router;