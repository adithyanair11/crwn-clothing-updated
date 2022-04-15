import {initializeApp} from 'firebase/app';
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
const config = {
    apiKey: "AIzaSyBHIvCMWs63XEUa-VOTUjSfbEtp4iAemJ0",
    authDomain: "crwn-new-db.firebaseapp.com",
    projectId: "crwn-new-db",
    storageBucket: "crwn-new-db.appspot.com",
    messagingSenderId: "821021578524",
    appId: "1:821021578524:web:37c4c20adae6243ddbd6d9"
  };

  const firebaseApp = initializeApp(config);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopUp = () => signInWithPopup(auth,provider);



  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth,additionalInfo) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date;
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }catch(err){
            console.log(err);
        }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email,password) => {
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth,email,password)
  }