const router = require('express').Router();

const categoryController = require('../controllers/categoryController');

router.get('/',categoryController.listCategories);
router.get('/:categoryId',categoryController.getCategoryById)
router.post('/',categoryController.createCategory);
router.put('/:categoryId',categoryController.updateCategory);
router.delete('/:categoryId',categoryController.deleteCategory);
module.exports = router;