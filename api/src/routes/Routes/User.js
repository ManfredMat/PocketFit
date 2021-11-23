const { Router } = require('express');
const { User } = require('../../db')
const router = Router();

router.post('/', (req, res, next)=>{
        res.send('post created succs')
} )

module.exports = router;