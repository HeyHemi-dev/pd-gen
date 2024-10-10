export interface AppSettings {
  industries: string[]
  tones: string[]
}

export const appSettings: AppSettings = {
  industries: ['tech', 'finance', 'health'],
  tones: ['formal', 'casual', 'conversational'],
}
