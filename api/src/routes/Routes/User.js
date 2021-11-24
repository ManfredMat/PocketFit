
const { Router } = require('express');
const { User } = require('../../db')
const router = Router();

router.post('/register_user', (req, res, next)=>{
        res.send('post created succs')
} )
router.post('/traine_plan', (req, res, next)=>{
        res.send('training created succs')
} )
router.get('/', (req, res, next)=>{
        res.send('allusers created succs')
} )
router.get('/:id', (req, res, next)=>{
        res.send('id created succs')
} )
router.get('/traine_plan/:id', (req, res, next)=>{
        res.send('training id plan get succs')
} )
router.post('/traine_plan/:id', (req, res, next)=>{
        res.send('training id plan posted succs')
} )
router.put('/traine_plan/:id/:name', (req, res, next)=>{
        res.send('training id plan changed succs')
} )
router.delete('/traine_plan/:name', (req, res, next)=>{
        res.send('training id plan deleted succs')
} )

module.exports = router;

