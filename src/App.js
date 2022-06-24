import {Routes,Route} from 'react-router-dom';
import {Navigation} from './routes/navigation/navigation.component';
import { Home } from "./routes/home/home.component";
import { SignIn } from './routes/signIn/sign-in.component';
import { Shop } from './routes/shop/shop.component';
import { CheckOutPage } from './routes/check-out/check-out.component';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { setCurrentUser } from './store/user/user.action';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
},[dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/checkout' element={<CheckOutPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
