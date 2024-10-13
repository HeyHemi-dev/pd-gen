import OpenAI from 'openai'
import { pdFormData } from '~/components/pdForm'
const openai = new OpenAI()

export async function pdCompletion(formData) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: 'Write a haiku about recursion in programming.',
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
