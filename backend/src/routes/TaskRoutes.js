const express = require('express');

const router =  express.Router();

const TaskController = require('../controller/TaskController');
const Auth =  require('../middlewares/Auth');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');


router.post('/registerTask',Auth,TaskController.create);
router.put('/:id',TaskValidation,TaskController.update);
router.get('/filter/all',MacaddressValidation,TaskController.all);

module.exports = router;