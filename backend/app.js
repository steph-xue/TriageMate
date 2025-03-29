const { GoogleGenAI } = require("@google/genai");
const express = require('express');
const request = require('request');
const mongoose = require('mongoose');
require('dotenv').config();

const database_uri = process.env.ATLAS_URI;
const gemini_ai_api = process.env.GEMINIAI;

const ai = new GoogleGenAI({ apiKey: gemini_ai_api });

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const data = req.body.data;
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `You are a multilingual medical triage assistant, given ${data} which is a user's symptom description in any language, do the following: Translate the input into English (if not already in English). Extract and structure the relevant medication information into a triage report with the following sections: 1. Chief complaint (1-2 sentences). 2. Symptom details (such as onset, duration, intensity/severity, location, characteristics). 3. Risk factors (medical risk factors like age or medical conditions, family history, environmental risk factors like contact with sick individuals, recent hospitalizations). 4. Red flag symptoms (symptoms that may indicate serious or urgent conditions). 5. Any other concerns (if relevant). 6. Possible urgency level (e.g., Emergency, Urgent, Non-Urgent`,

        });

        res.status(200).json({ data: response });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

mongoose.connect(database_uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB.');

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});

