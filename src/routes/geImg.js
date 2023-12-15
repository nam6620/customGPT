const express = require('express');
const router = express.Router();
const geImgController = require('../app/controllers/GeImgController');


router.post('/sendms', geImgController.sendMessage);
router.use('/',geImgController.index);



module.exports = router;                                                         