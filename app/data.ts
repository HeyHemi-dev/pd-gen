export interface AppSettings {
  industry: string[]
  tone: string[]
}

export const appSettings: AppSettings = {
  industry: ['tech', 'finance', 'health'],
  tone: ['formal', 'casual', 'conversational'],
}
