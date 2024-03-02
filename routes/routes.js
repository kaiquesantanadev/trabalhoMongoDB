const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/userController')
const userControllers = new UserControllers()


router.post('/cadastro', userControllers.cadastro)
router.post('/login', userControllers.login)
router.get('/usuarios', userControllers.usuarios)


module.exports = router