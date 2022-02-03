import Signup from './Component/Signup/Signup'
import Signin from './Component/Signin/Signin'
import Connected from './View/Connected'
import app from "./Service/config-firebase.service"
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signup/>}/>
      <Route exact path="/Signin" element={<Signin/>}/>
      <Route exact path="/Connected" element={<Connected/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
