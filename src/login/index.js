var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var title = require('title')

page('/login', (context, next) => {
    title('Platzigram - Log in')
    var main = document.getElementById('main-container')
    empty(main).appendChild(template)
})