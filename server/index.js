import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import {NlpManager} from "node-nlp";

// const manager= new NlpManager({languages: ['en'], forceNER: true});

// manager.addDocument('en', 'goodbye for now', 'greetings.bye');
// manager.addDocument('en', 'bye bye take care', 'greetings.bye');
// manager.addDocument('en', 'okay see you later', 'greetings.bye');
// manager.addDocument('en', 'bye for now', 'greetings.bye');
// manager.addDocument('en', 'i must go', 'greetings.bye');
// manager.addDocument('en', 'hello', 'greetings.hello');
// manager.addDocument('en', 'hi', 'greetings.hello');
// manager.addDocument('en', 'howdy', 'greetings.hello');
// manager.addDocument('en', 'What are you doing', 'greetings.ask');

// // Train also the NLG
// manager.addAnswer('en', 'greetings.bye', 'Till next time');
// manager.addAnswer('en', 'greetings.bye', 'see you soon!');
// manager.addAnswer('en', 'greetings.hello', "Hello, I'm Berry a finance expert in investment and onboarding. How can I help you ?");
// manager.addAnswer('en', 'greetings.hello', 'Greetings!');
// manager.addAnswer('en', 'greetings.ask', 'Nothing Much');

const app = express()

env.config()

app.use(cors())
app.use(bodyParser.json())

const configuration= new Configuration({
    organization: "org-khJumDKErFsOy8XRrZ8oKxCu",
    apiKey: process.env.API_KEY
})
const openai= new OpenAIApi(configuration)

app.listen("3080", () => console.log("listening on port 3080"))

app.get("/", (req, res) => {
    res.send("Hello Everyone")
})

app.post("/", async(req, res)=>{
    const {message} = req.body

    try{

        // await manager.train();
        // manager.save();
        // const response = await manager.process('en', `${message}`);
        // res.json({message: response.answers[0].answer});
        // console.log(message);
        const response= await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages:[
                {role: "user", content: `${message}`},
                {role: "system", content: "A finance expert in investment and onboarding expert"}
            ]
        })
        res.json({message: response.data.choices[0].message.content})

    }catch(e){
        console.log(e)
        res.send(e).status(400)
    }
})