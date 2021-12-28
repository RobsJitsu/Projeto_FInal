const express = require("express"); 
const router = express.Router(); 
const CompanyController = require("../controller/Company.controller"); 

router.get('/listar', CompanyController.getAll);

router.get('/listarnome/:id', CompanyController.getSingle);

router.post('/adicionar', CompanyController.postCreate);

router.put('/update/:id', CompanyController.putUpdate);

router.delete("/deletar/:id", CompanyController.delDelete);

module.exports = router;