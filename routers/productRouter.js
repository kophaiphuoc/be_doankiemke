const router = require("express").Router();
const {productController} = require('../controllers/productControllers')

router.post('/addproduct',productController.addProductControllers)
router.post('/deleteproduct',productController.deleteProductControllers)
router.post('/editproduct',productController.editProductControllers)
router.get('/findproduct/:code',productController.findProductControllers)
router.get('/getlisttype/:code',productController.getTypeProductControllers)

module.exports = router;