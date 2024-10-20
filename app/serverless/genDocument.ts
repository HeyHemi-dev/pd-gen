import OpenAI from 'openai'
import { PdFormFields } from '~/components/pdForm'
import { promptSystem, promptUser } from '~/data'
const openai = new OpenAI()

export async function pdCompletion(payload: unknown) {
  try {
    //console.log({ payload })
    const details = payload as PdFormFields

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: `${promptSystem.content}` },
        {
          role: 'user',
          content: `${promptUser.content} Details: ${JSON.stringify(details)}`,
        },
      ],
    })
    return completion as ChatCompletion
  } catch (error) {
    console.log(error)
  }
}

//OpenAI chat completion object
export interface ChatCompletion {
  id: string
  object: string
  created: number
  model: string
  system_fingerprint: string
  choices: Choice[]
  usage: Usage
}

export interface Choice {
  index: number
  message: Message
  logprobs: null
  finish_reason: string
}

export interface Message {
  role: string
  content: string
}

export interface Usage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
  completion_tokens_details: CompletionTokensDetails
}

export interface CompletionTokensDetails {
  reasoning_tokens: number
}
