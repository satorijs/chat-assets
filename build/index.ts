import { load } from 'js-yaml'
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const source = resolve(__dirname, '../manifest')
const target = resolve(__dirname, '../public')

for (const filename of readdirSync(source)) {
  if (!filename.endsWith('.yaml')) continue
  const data = load(readFileSync(`${source}/${filename}`, 'utf8'))
  const name = filename.replace('.yaml', '')
  mkdirSync(`${target}/${name}`, { recursive: true })
  writeFileSync(`${target}/${name}/index.json`, JSON.stringify(data))
}
