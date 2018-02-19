var yoyo = require('yo-yo')
var landing = require('../landing')

var loginForm = yoyo `<div class="col s12 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="instapound">Instapound</h1>
            <form class="signup-form">
                <div class="section">
                    <a class="btn btn-fb hide-on-small-only">Sign up with Facebook</a>
                    <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook"></i>Sign up</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="username" placeholder="Username">
                    <input type="text" name="password" placeholder="Password">
                    <button class="btn waves-effect waves-light btn-signup" type="submit">Log in</button>
                </div>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
            Don't have an account? <a href="/signup">Sign up</a>
        </div>
    </div>
    </div>`

module.exports = landing(loginForm)