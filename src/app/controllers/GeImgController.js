const OpenAI =  require('openai');
class GeImgController {
  index(req, res) {
    res.render('generateImages');
  }
  async sendMessage(req, res) {
    const openai = new OpenAI({
      apiKey: "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"// This is also the default, can be omitted
    });
    try {
      const prompt = req.body.prompt;
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "256x256",
      });
      // console.log(response);
      res.status(200).send({

        bot: response.data[0].url
      });
  
    } catch (error) {
      console.error(error)
      res.status(500).send(error || 'Something went wrong');
    }
  }
}

module.exports = new GeImgController();