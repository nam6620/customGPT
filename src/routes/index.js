const chatRouter = require('./chat');
const chatGPT4Router = require('./chatGPT4');
const geImgRouter = require('./geImg');
const TTSRouter = require('./TTS');
const siteRouter = require('./site');


function route(app) {
    
    app.use('/chat',chatRouter);
    app.use('/generateImg',geImgRouter);
    app.use('/chatGPT4',chatGPT4Router);
    app.use('/TTS',TTSRouter);
    app.use('/',siteRouter);
    
}

module.exports = route;