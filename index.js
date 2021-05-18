import { loginPage } from './pages/login.js'
import { gameSetupPage } from './pages/gameSetup.js'
import { gamePage } from './pages/game.js'

window.showPage = function (page) {
    switch(page) {
        case "login":
            document.body.innerHTML = loginPage
            break
        case "setup": 
            document.body.innerHTML = gameSetupPage
            break
        case "game":
            document.body.innerHTML = gamePage
            break
        default:
            document.body.innerHTML = `<div>where are we?</div>`
    }
}

window.onload = () => {
    document.body.innerHTML = loginPage
};