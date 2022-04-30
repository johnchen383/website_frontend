import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import AdminDashboard from './AdminDashboard';
import { auth } from './firebase_hosting/Firebase';
import SignIn from './SignIn';

function Admin() {

    // tracking signed in status
    const [isSignedIn, setSignInStatus] = useState(false);

    // This observer gets called whenever the user's sign-in state changes (ie. whenever someone logs in or logs out)
    // See https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
    onAuthStateChanged(auth, (user) => {
        if (user){
            // user is successfully logged in
            setSignInStatus(true);
        } else {
            // user is not logged in
            setSignInStatus(false);
        }
    })

    // prompts sign in if not logged in
    return (isSignedIn ? <AdminDashboard /> : <SignIn />)
}

export default Admin