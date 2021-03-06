const express = require('express')
const router = express.Router()
const passport = require('passport')
const auth = require('../../functions/auth')
const multer = require('multer')
const upload = multer({ dest: 'temp/' })

const adminController = require('../../controllers/admin/adminController')
const productController = require('../../controllers/admin/productController')
const orderController = require('../../controllers/admin/orderController')

// Admin
router.get('/signin', adminController.AdminSignInPage)
router.post('/signin', passport.authenticate('local', {
  failureRedirect: '/signin', failureFlash: true
}), adminController.AdminSignIn)

router.get('/products', auth.authenticatedAdmin, productController.getProducts)
router.get('/products/new', auth.authenticatedAdmin, productController.addProduct)
router.post('/products/new', auth.authenticatedAdmin, upload.single('image'), productController.postProduct)
router.get('/products/:id', auth.authenticatedAdmin, productController.getProduct)
router.put('/products/:id', auth.authenticatedAdmin, upload.single('image'), productController.putProduct)
router.delete('/products/:id', auth.authenticatedAdmin, productController.deleteProduct)

router.get('/orders', auth.authenticatedAdmin, orderController.getOrders)
router.post('/order/:id/cancel', auth.authenticatedAdmin, orderController.cancelOrder)

module.exports = router