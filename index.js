import express from  'express'
let app = express()
app.get('/', (req, res) => {
    res.send('fvck!')
})
app.listen(3000, () => {
    console.log('on 3000 port now!')
})