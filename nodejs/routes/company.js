const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/',companyController.companyList)
router.get('/:companyId',companyController.companyById)
router.post('/',companyController.createCompany)
router.delete('/:companyId',companyController.companyDelete)
router.put('/:companyById',companyController.companyUpdate)


module.exports  = router;
