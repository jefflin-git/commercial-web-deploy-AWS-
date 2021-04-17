const passport = require('passport')
const authenticated = passport.authenticate('jwt', { session: false })
const express = require('express')
const router = express.Router()

const userController = require('../../controllers/api/user/userController')
const productController = require('../../controllers/api/user/productController')
const cartController = require('../../controllers/api/user/cartController')

router.post('/signin', userController.signIn)
router.post('/signup', userController.signUp)

router.get('/', productController.getProducts)
router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getProduct)

router.get('/cart', cartController.getCart)
router.post('/cart', cartController.postCart)
router.post('/cartItem/:id/add', cartController.addCartItem)
router.post('/cartItem/:id/sub', cartController.subCartItem)
router.delete('/cartItem/:id', cartController.deleteCartItem)

module.exports = router