import OpenAI from 'openai'; 
import { Open_AI_key } from './constants';

const OpenAi = new OpenAI({
  apiKey: Open_AI_key, 
  dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});

export default OpenAi