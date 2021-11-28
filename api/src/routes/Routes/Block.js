const { Router } = require("express");
const { createBlock,getAllBlocks,getBlockById,updateBlock,deleteBlock} =require("../Controllers/Block")
    
const router = Router();


router.post("/", createBlock)

router.get("/", getAllBlocks)

router.get("/:id", getBlockById)

router.put("/:id/:prop", updateBlock)

router.delete("/:id", deleteBlock)


module.exports = router;