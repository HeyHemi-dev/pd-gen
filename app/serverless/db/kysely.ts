import { createKysely } from '@vercel/postgres-kysely'
const connectionString = process.env.PD_POSTGRES_URL || process.env.POSTGRES_URL
// console.log(connectionString)

export const db = createKysely({ connectionString })
