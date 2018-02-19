var yoyo = require('yo-yo')
var landing = require('../landing')

var signupForm = yoyo `<div class="col s12 m7">
        <div class="row">
            <div class="signup-box">
                <h1 class="instapound">Instapound</h1>
                <form class="signup-form">
                    <h2>Sign up to see photos of your friends.</h2>
                    <div class="section">
                        <a class="btn btn-fb hide-on-small-only">Sign up with Facebook</a>
                        <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook"></i>Sign up</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <input type="email" name="email" placeholder="Email">
                        <input type="text" name="name" placeholder="Name">
                        <input type="text" name="username" placeholder="Username">
                        <input type="text" name="password" placeholder="Password">
                        <button class="btn waves-effect waves-light btn-signup" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="login-box">
                Have an account? <a href="/login">Log in</a>
            </div>
        </div>
    </div>`

module.exports = landing(signupForm)