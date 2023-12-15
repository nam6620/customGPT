const OpenAI = require('openai');
class ChatController {
  index(req, res) {
    res.render('chat');
  }
  async sendMessage(req, res) {
    const openai = new OpenAI({
      apiKey: "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"  // This is also the default, can be omitted
    });
    try {
      const prompt = req.body.prompt;
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: prompt,
      });

      res.status(200).send({
        bot: response.choices[0].message
      });

    } catch (error) {
      console.error(error)
      res.status(500).send(error || 'Something went wrong');
    }
  }
}

module.exports = new ChatController();