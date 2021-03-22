const express = require('express');

const router = express.Router();

const UserController = require('../controller/AuthUserController');

const UserValidation = require('../middlewares/UserValidation');

router.post('/register',UserValidation,UserController.register);
router.post('/authenticate',UserController.authenticate);

module.exports = router;