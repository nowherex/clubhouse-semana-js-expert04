
import { constants } from "../../../_shared/constants.js"
import SocketBuilder from "../../../_shared/socketBuilder.js"

export default class RoomSocketBuilder extends SocketBuilder{
    constructor({ socketUrl, namespace}) {
        super({ socketUrl, namespace})
        this.onRoomUpdated = () => {}
        this.OnUserProfileUpgrade = () => {}

    }

    setOnRoomUpdated(fn) {
        this.onRoomUpdated = fn

        return this
    }

    setOnUserProfileUpgrade(fn) {
        this.OnUserProfileUpgrade = fn

        return this
    }

    builder() {
        const socket = super.builder()

        socket.on(constants.events.LOBBY_UPDATED, this.onRoomUpdated)
        socket.on(constants.events.UPGRADE_USER_PERMISSION, this.OnUserProfileUpgrade)
       
        return socket
    }
}