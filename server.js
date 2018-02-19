var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Instapound' })
})

app.get('/signup', (req, res) => {
    res.render('index', { title: 'Instapound - Sign up' })
})

app.get('/login', (req, res) => {
    res.render('index', { title: 'Instapound - Log in' })
})

app.listen(3000, (err) => {
    if (err) return console.log('Error'), process.exit(1)

    console.log('Instapound listening in the port 3000')
})