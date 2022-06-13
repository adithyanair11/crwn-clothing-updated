import {Routes,Route} from 'react-router-dom';
import {Navigation} from './routes/navigation/navigation.component';
import { Home } from "./routes/home/home.component";
import { SignIn } from './routes/signIn/sign-in.component';
import { Shop } from './routes/shop/shop.component';
import { CheckOutPage } from './routes/check-out/check-out.component';

const App = () => {
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
