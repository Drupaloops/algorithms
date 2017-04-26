import express from  'express'
import fs from 'fs'
let app = express()
fs.writeFile('./oops.txt', 'wowowowowoowwowowowowow', (err) => {
    if (err) {
        return console.error(err)
    }
    fs.readFile('./oops.txt', (err, data) => {
        if (err) {
            return console.error(err)
        }
        console.log('异步获取' + data.toString())
    })
})
app.get('/', (req, res) => {
    res.send('/////')
})
app.listen(3000, () => {
    console.log('on 3000 port now!')
})