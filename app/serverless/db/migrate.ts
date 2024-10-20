import * as path from 'path'
import { promises as fs } from 'fs'
import { db } from './kysely.ts'
import { Migrator, FileMigrationProvider } from 'kysely'
import { run } from 'kysely-migration-cli'

const migrationFolder = new URL('../migrations', import.meta.url).pathname

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder,
  }),
})

run(db, migrator, migrationFolder)
