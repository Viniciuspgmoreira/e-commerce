import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyCOrFTvNVJpVfcHsz2NBaGzDhFbINWRp0U",
    authDomain: "my-ecommerce-4f937.firebaseapp.com",
    projectId: "my-ecommerce-4f937",
    storageBucket: "my-ecommerce-4f937.appspot.com",
    messagingSenderId: "8225272444",
    appId: "1:8225272444:web:940344ca49dd28fac60ff9",
    measurementId: "G-CZ57GRD9LZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef

}

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;