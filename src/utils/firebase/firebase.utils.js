import {initializeApp} from 'firebase/app';
import {
getAuth,
signInWithPopup,
GoogleAuthProvider,createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore';
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

// allows to sign in with google via the pop up
  export const signInWithGooglePopUp = () => signInWithPopup(auth,provider);

// initializes the firestore database
export const db = getFirestore();

// creates a collection and adds objects to it
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })

    await batch.commit()
}
// getting data from the database which we just pushed in
export const getCategoriesAndDocuments = async() => {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);
  // mapping the docs to an array to buid the map logic with redux selectors
    const querySnapShot = await getDocs(q);
    return querySnapShot.docs.map(docSnapShot => docSnapShot.data());

}

// creating a user and adding to the database
  export const createUserDocumentFromAuth = async(userAuth,additionalInfo) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
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

// authenticating the user with email and password before adding to the database.
  export const createAuthUserWithEmailAndPassword = async (email,password) => {
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth,email,password)
  }
// signing in a user with email and password
  export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
}

// signing out a user
export const signOutUser = async() => await signOut(auth);

// event listner which fires every time the user signs in or signs out
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);