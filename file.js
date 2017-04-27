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
root = path.join(root, cat)
let fun = filepath.split('/')[1]
function createFile() {
    if (!fs.existsSync(root)) {
        fs.mkdirSync(root)
        createFile()
    } else {
        if (!fs.existsSync(path.join(root, fun))) {
            fs.mkdirSync(path.join(root, fun))
            createFile()
        } else {
            if (!fs.existsSync(path.join(root, fun, fun + '.js'))) {
                fs.readFile('template.js', 'utf8', (err, data) => {
                    if (err) {
                        console.log(err)
                    }
                    data = data.replace(/\$fileName/gm, fun)
                    fs.writeFileSync(path.join(root, fun, fun + '.js'), data)
                    console.log('Create & write success!!!')
                })
            } else {
                console.log('It is already exist!!!')
            }
        }
    }
}
createFile()