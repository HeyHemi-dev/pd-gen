export interface SelectField {
  name: string
  collection: string
  items: string[]
  example?: string
}

export interface Prompt {
  content: string
}

export const selectFields: SelectField[] = [
  {
    name: 'industry',
    collection: 'Industries',
    items: ['Aviation', 'Tech', 'Finance', 'Health'],
    example: 'Tech',
  },
  {
    name: 'tone',
    collection: 'Tone options',
    items: ['Formal', 'Casual', 'Conversational'],
    example: 'Formal',
  },
  {
    name: 'experience',
    collection: 'Experience levels',
    items: ['Graduate', 'Junior', 'Intermediate', 'Senior'],
    example: 'Intermediate',
  },
]

export const promptUser: Prompt = {
  content: 'Create a job position description',
}

export const promptSystem: Prompt = {
  content:
    'You are a hiring manager for New Zealand company. The user will give you some details about an open position. Use these to create a position description. Use markdown for formatting. Return only the finished document, without any other explanation',
}

// export interface AppSettings {
//   selectFields: SelectField[]
//   prompt: string
// }

// export const appSettings: AppSettings = {
//   selectFields: [
//     {
//       name: 'industry',
//       collection: 'Industries',
//       items: ['Aviation', 'Tech', 'Finance', 'Health'],
//       example: 'Tech',
//     },
//     {
//       name: 'tone',
//       collection: 'Tone options',
//       items: ['Formal', 'Casual', 'Conversational'],
//       example: 'Formal',
//     },
//     {
//       name: 'experience',
//       collection: 'Experience levels',
//       items: ['Graduate', 'Junior', 'Intermediate', 'Senior'],
//       example: 'Intermediate',
//     },
//   ],
//   prompt: 'generate a job position description',
// }
