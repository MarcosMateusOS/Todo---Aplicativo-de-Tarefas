const express = require('express');

const router =  express.Router();

const TaskController = require('../controller/TaskController');

const TaskValidation = require('../middlewares/TaskValidation');


router.post('/',TaskValidation ,TaskController.create);

module.exports = router;