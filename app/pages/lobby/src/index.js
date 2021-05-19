import { constants } from "../../_shared/constants.js";
import LobbyController from "./controller.js";
import LobbySocketBuilder from "./util/lobbySocketBuilder.js";
import View from "./util/view.js";


const user = {
    img: 'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-256.png',
    username: 'Leonardo' + Date.now()
}


const socketBuilder = new LobbySocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.lobby
})

const dependencies = {
    socketBuilder,
    user,
    view: View
}

await LobbyController.initialize(dependencies)