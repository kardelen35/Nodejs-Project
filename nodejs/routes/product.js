const express = require("express");

const router = express.Router();

const { createProduct,updateProduct,deleteProduct,listProducts,getProductById } = require("../controllers/productController");

router.get('/',listProducts);
router.get('/:id',getProductById);
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct)

module.exports = router;
