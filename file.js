import path from  'path'
import fs from 'fs'
let argv = process.argv
if(argv.length < 3 || argv.length > 4) {
  console.error('Invalid parameters!!!')
  process.exit(0)
}
let filepath = argv[2]
let root = path.join(__dirname, './category')
let cat = filepath.split('/')[0]
console.log("root: " + cat)
if (!fs.existsSync(path.join(root, cat))) {
    console.log(path.join(root, cat))
    fs.mkdirSync(path.join(root, cat))
}