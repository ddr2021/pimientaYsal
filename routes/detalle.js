var express = require('express');
var router = express.Router();

const { detalleMenu } = require('../controllers/detalleController');

router.get('/:id', detalleMenu);



module.exports = router;
