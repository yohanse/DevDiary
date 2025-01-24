import axios from "axios";
import prompt from "../helpers/prompt";
import * as dotenv from 'dotenv';

dotenv.config();

export default async (fileActivities: string[]) => {
    fileActivities.unshift(prompt());
    console.log(fileActivities);
    const data = {
        contents: [
          {
            parts: [
              { text: fileActivities.join("\n") }
            ]
          }
        ]
      };
      
    try {
        const reponse = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        console.log(reponse.data);
        return reponse.data["candidates"][0]["content"]["parts"][0]["text"];
    } catch (error) {
        throw new Error("There was an error while posting the data to the AI model");
    }
};