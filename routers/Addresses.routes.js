const express = require("express"); 
const router = express.Router(); 
const AddressesController = require("../controller/Addresses.controller"); 

router.get('/listar', AddressesController.getAll);

router.get('/listarnome/:id', AddressesController.getSingle);

router.post('/adicionar', AddressesController.postCreate);

router.put('/update/:id', AddressesController.putUpdate);

router.delete("/deletar/:id",AddressesController.delDelete);

module.exports = router;