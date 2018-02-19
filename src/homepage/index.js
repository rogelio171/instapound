var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var title = require('title')

page('/', (context, next) => {
    title('Platzigram - Log in')
    var main = document.getElementById('main-container')

    var pictures = [{
            user: {
                username: 'mentor',
                avatar: 'https://help.github.com/assets/images/help/profile/identicon.png'
            },
            url: 'static/office.jpg',
            likes: 1024,
            liked: true
        },
        {
            user: {
                username: 'react',
                avatar: 'https://camo.githubusercontent.com/4cd81746316e5fd90aecab2beeee496d61859dbe/687474703a2f2f686564726f6e69756d2e6769746875622e696f2f41766974792f696d616765732f7661726965645f322e6a706567'
            },
            url: 'static/office.jpg',
            likes: 124,
            liked: true
        },
        {
            user: {
                username: 'flux',
                avatar: 'https://camo.githubusercontent.com/f8bb1bcef059d5fc71e96594fc9472a8e776e06c/68747470733a2f2f736967696c2e63757063616b652e696f2f536967696c'
            },
            url: 'static/office.jpg',
            likes: 104,
            liked: true
        },
        {
            user: {
                username: 'mono',
                avatar: 'https://secure.gravatar.com/avatar/cd026d596a584c935a7b2dd1a852af9d?s=200&d=identicon&r=g'
            },
            url: 'static/office.jpg',
            likes: 24,
            liked: true
        },
        {
            user: {
                username: 'koan',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpEM0e-m4BIaUhGDGofaxBlvAKmOxfhL9ESSUOepUFNbrfhNf'
            },
            url: 'static/office.jpg',
            likes: 54,
            liked: true
        }
    ]

    empty(main).appendChild(template(pictures))
})