import { load } from 'js-yaml'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const source = resolve(__dirname, '../manifest')
const target = resolve(__dirname, '../public')

for (const filename of readdirSync(source)) {
  if (!filename.endsWith('.yaml')) continue
  const data = load(readFileSync(resolve(source, filename), 'utf8'))
  writeFileSync(resolve(target, filename.replace('.yaml', '/index.json')), JSON.stringify(data))
}
