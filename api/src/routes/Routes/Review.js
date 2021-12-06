const { Router } = require("express");
const { sendReview, getReviews, getOneReview, deleteOneReview } =require("../Controllers/Review")
    
const router = Router();


router.post('/send' , sendReview)
router.get('/all' , getReviews)
router.get('/' , getOneReview)
router.delete('/review' , deleteOneReview)

module.exports = router;