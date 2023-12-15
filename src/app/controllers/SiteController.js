class ChatController {
    
    index(req, res) {
        res.render('home');
    }

}

module.exports = new ChatController();