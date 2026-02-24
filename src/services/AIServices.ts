import { streamText} from 'ai'
import { openrouter } from '../lib/ia'
export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openrouter('google/gemma-3n-e4b-it:free'),//inserto el modelo de ia q saco de la pagina
            //model: "openrouter/free"
            prompt,
            //system:'Eres un niño',
            temperature:0.7
        })
        return result.textStream
    }
}