var yoyo = require('yo-yo')

module.exports = function layout(content) {
    return yoyo `<div>
        <nav class='header'>
            <div class='nav-wrapper'>
                <div class='container'>
                    <div class='row'>
                        <div class='col s12 m6 offset-m1'>
                            <a href='/' class='brand-logo instapound'>Instapound</a> 
                        </div>
                        <div class='col s2 m6 push-s10 push-m10'>
                            <a href='#' class='btn btn-large btn-flat dropdown-button' data-activates='drop-user'>
                                <i class="fas fa-user"></i>
                            </a> 
                            <ul id='drop-user' class='dropdown-content'>
                                <li><a href='#'>Exit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class='content'>
            ${content}
        </div> 
    </div>`
}