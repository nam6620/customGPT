const express = require('express');
const router = express.Router();
const chatController = require('../app/controllers/ChatController');


router.post('/sendms', chatController.sendMessage);
router.use('/',chatController.index);



module.exports = router;                                                         