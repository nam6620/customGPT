const OpenAI = require('openai');
class ChatGPT4Controller {
    index(req, res) {
        res.render('chatGPT4');
    }
    async sendMessage(req, res) {
        const openai = new OpenAI({
            apiKey: "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" // This is also the default, can be omitted
        });
        try {
            const prompt = req.body.prompt;
            const response = await openai.chat.completions.create({
                model: "gpt-4-vision-preview",
                messages: [
                    {
                        role: "user",
                        content: [
                            { type: "text", text: "What’s in this image?" },
                            {
                                type: "image_url",
                                image_url: {
                                    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                                },
                            },
                        ],
                    },
                ],
            });
            // console.log(response)
            res.status(200).send({
                bot: response.choices[0]
            });

        } catch (error) {
            console.error(error)
            res.status(500).send(error || 'Something went wrong');
        }
    }
}

module.exports = new ChatGPT4Controller();