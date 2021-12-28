const express = require("express"); 
const router = express.Router(); 
const FieldsController = require("../controller/Fields.controller"); 

router.get('/listar', FieldsController.getAll);

router.get('/listarnome/:id', FieldsController.getSingle);

router.post('/adicionar', FieldsController.postCreate);

router.put('/update/:id', FieldsController.putUpdate);

router.delete("/deletar/:id",FieldsController.delDelete);

module.exports = router;