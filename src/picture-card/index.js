var yoyo = require('yo-yo')

module.exports = function pictureCard(image) {
    var element;

    function render(img) {
        return yoyo `<div class="card ${img.liked ? 'liked' : '' } ">
            <div class="card-image">
                <img class="activator" src="${img.url}">
            </div>
            <div class="card-content">
                <a href="/user/${img.user.username}" class="card-title">
                    <img src="${img.user.avatar}" class="avatar" />
                    <span class="username">${img.user.username}</span>
                </a>
                <small class="right time">1 day ago</small>
                <p>
                    <a class="left" href="#" onclick=${like.bind(null, true)}><i class="far fa-heart"></i></a>
                    <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fas fa-heart"></i></a>
                    <span class="left likes">${img.likes} Likes</span>
                </p>
            </div>
        </div>`
    }

    function like(liked) {
        image.liked = liked
        image.likes += liked ? 1 : -1
        var newElement = render(image)
        yoyo.update(element, newElement)
        return false;
    }

    element = render(image)
    return element
}