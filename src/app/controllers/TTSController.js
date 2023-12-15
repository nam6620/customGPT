const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');


class ChatController {
  index(req, res) {
    res.render('TTS');
  }
  async sendMessage(req, res) {
    const openai = new OpenAI({
      apiKey: "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" // This is also the default, can be omitted
    });
    try {
      const prompt = req.body.prompt;
      const currentTime = new Date().getTime();
      const speechFile = path.resolve(`./src/public/audios/${currentTime}.mp3`);
      const response = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: prompt,
      });

    console.log(response);
      const buffer = Buffer.from(await response.arrayBuffer());
      await fs.promises.writeFile(speechFile, buffer);

      res.status(200).send({
        bot: currentTime
      });

    } catch (error) {
      console.error(error)
      res.status(500).send(error || 'Something went wrong');
    }
  }
}

module.exports = new ChatController();