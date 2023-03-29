import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/Loginpage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';

import {Route, Routes} from 'react-router-dom'
import ForgetPassword from './Components/Loginpage/ForgetPassword';
import LoginPageScreen from './Components/Loginpage/LoginPageScreen';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/loginPage' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/forgetPswd' element={<ForgetPassword />}/>
                <Route path='/galleryScreen' element={<LoginPageScreen />} />
            </Routes>
    </div>
  );
}

export default App;
