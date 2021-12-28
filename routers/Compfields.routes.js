const express = require("express"); 
const router = express.Router(); 
const CompfieldsController = require("../controller/Compfields.controller"); 

router.get('/listar', CompfieldsController.getAll);

router.get('/listarnome/:id', CompfieldsController.getSingle);

router.post('/adicionar', CompfieldsController.postCreate);

router.put('/update/:id', CompfieldsController.putUpdate);

router.delete("/deletar/:id",CompfieldsController.delDelete);

module.exports = router;