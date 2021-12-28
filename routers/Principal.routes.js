const express = require("express"); 
const router = express.Router(); 
const PrincipalController = require("../controller/Principal.controller"); 

router.get("/listall",PrincipalController.getAll);

router.get("/listname/:id",PrincipalController.getSingle);

router.post("/add",PrincipalController.postCreate);

router.put("/update/:id",PrincipalController.putUpdate);

router.delete("/delete/:id",PrincipalController.delDelete);

module.exports = router;

