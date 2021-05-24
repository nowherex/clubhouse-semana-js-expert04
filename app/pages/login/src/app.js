import { constants } from "../../_shared/constants.js";
import UserDb from "../../_shared/userDb.js";

const { firebaseConfig } = constants
const btnLogin = document.getElementById('btnLogin')
const btnLoginFb = document.getElementById('btnLoginFb')


function redirectToLobby() {
    window.location = constants.pages.lobby
}

function onLogin({provider, firebase}) {
    return async () => {
        try {
            console.log(provider)
            const result = await firebase
                .auth()
                .signInWithPopup(provider)
            const { user } = result;
            const userData = {
                img: user.photoURL,
                username: user.displayName
            }
            console.log(user)
            UserDb.insert(userData)
            redirectToLobby()
        } catch (error) {
            alert(JSON.stringify(error))
            console.log('Error', error)
        }
    }
}


const currentUser = UserDb.get()
if(Object.keys(currentUser).length){
    redirectToLobby()
}


firebase.initializeApp(firebaseConfig);
firebase.analytics();

const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('read:user');

const providerFb = new firebase.auth.FacebookAuthProvider();
    providerFb.addScope('public_profile');

btnLogin.addEventListener('click', onLogin({provider, firebase}))
btnLoginFb.addEventListener('click', onLogin({provider: providerFb, firebase}))


