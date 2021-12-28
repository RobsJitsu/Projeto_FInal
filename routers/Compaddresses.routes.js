const express = require("express"); 
const router = express.Router(); 
const CompaddressesController = require("../controller/Compaddresses.controller"); 

router.get('/listar', CompaddressesController.getAll);

router.get('/listarnome/:id', CompaddressesController.getSingle);

router.post('/adicionar', CompaddressesController.postCreate);

router.put('/update/:id', CompaddressesController.putUpdate);

router.delete("/deletar/:id",CompaddressesController.delDelete);

module.exports = router;