const express = require('express');
const router = express.Router();
const TTSController = require('../app/controllers/TTSController');


router.post('/sendms', TTSController.sendMessage);
router.use('/',TTSController.index);



module.exports = router;                                                         