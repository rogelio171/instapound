var yoyo = require('yo-yo')

module.exports = function(image) {
    return yoyo `<div class="card">
        <div class="card-image">
            <img class="activator" src="${image.url}">
        </div>
        <div class="card-content">
            <a href="/user/${image.user.username}" class="card-title">
                <img src="${image.user.avatar}" class="avatar" />
                <span class="username">${image.user.username}</span>
            </a>
            <small class="right time">1 day ago</small>
            <p>
                <a class="left" href="#"><i class="far fa-heart"></i></a>
                <span class="left likes">${image.likes} Likes</span>
            </p>
        </div>
    </div>`
}