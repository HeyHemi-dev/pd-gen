import { createClient } from '@vercel/kv'

export interface AppSettings {
  industries: string[]
  tones: string[]
}

const appSettings = createClient({
  url: process.env.APP_SETTINGS_REST_API_URL,
  token: process.env.APP_SETTINGS_REST_API_TOKEN,
})

export async function getIndustries() {
  try {
    return await appSettings.lrange('industries', 0, -1)
  } catch (error) {
    console.log(error)
  }
}

export async function addIndustry(industry: string) {
  try {
    return await appSettings.lpush('industries', industry)
  } catch (error) {
    console.log(error)
  }
}
