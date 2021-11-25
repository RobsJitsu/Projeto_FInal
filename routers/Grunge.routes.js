const express = require("express"); 
const router = express.Router(); 
const GrungeController = require("../controller/Grunge.controller"); 

router.get("/listall",GrungeController.getAll);

router.get("/listname/:id", GrungeController.getSingle);

router.post('/add', GrungeController.postCreate);

router.put('/update/:id', GrungeController.putUpdate);

router.delete("/delete/:id", GrungeController.delDelete);

module.exports = router;

