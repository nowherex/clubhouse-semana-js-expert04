export const constants = {
    // socketUrl: 'http://localhost:3000',
    socketUrl: 'https://webapp-clubhouse.herokuapp.com',
    socketNamespaces: {
        room: 'room',
        lobby: 'lobby'
    },
    peerConfig: Object.values({
        id: undefined,
        config: {
            host: 'webapp-peerjs-server.herokuapp.com',
            secure: true,
            path: '/'
            // port: 9000,
            // host: 'localhost',
            // path: '/'
        }
    }),
    pages: {
        lobby: '/pages/lobby',
        login: '/pages/login'
    },
    events: {
        USER_CONNECTED: 'userConnection',
        USER_DISCONNECTED: 'userDisconnection',

        JOIN_ROOM: 'joinRoom',
        LOBBY_UPDATED: 'lobbyUpdated',
        UPGRADE_USER_PERMISSION: 'upgradeUserPermission',

        SPEAK_REQUEST: 'speakRequest',
        SPEAK_ANSWER: 'speakAnswer'
    },
    firebaseConfig: {
        apiKey: "AIzaSyDWy7MT-N6CPMCLs2hytdmqbMiurfsN5XY",
        authDomain: "semana-js-expert-85906.firebaseapp.com",
        projectId: "semana-js-expert-85906",
        storageBucket: "semana-js-expert-85906.appspot.com",
        messagingSenderId: "488915092911",
        appId: "1:488915092911:web:d149871066747cbbf7db5a",
        measurementId: "G-56DH9FSSFC"
    },
    storageKey: "jsexpert:storage:user"
}