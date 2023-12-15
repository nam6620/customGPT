const express = require('express');
const router = express.Router();
const chatGPT4Controller = require('../app/controllers/ChatGPT4Controller');


router.post('/sendms', chatGPT4Controller.sendMessage);
router.use('/',chatGPT4Controller.index);



module.exports = router;                                                         