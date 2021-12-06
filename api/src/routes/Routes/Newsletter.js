const { Router } = require("express");
const { subscribeToNews , unsubscribeToNews , sendNewsletter} =require("../Controllers/Newsletter")
    
const router = Router();


router.put('/subscribenews' , subscribeToNews)
router.put('/unsubscribenews' , unsubscribeToNews)
router.post('/sendnews' , sendNewsletter)


module.exports = router;