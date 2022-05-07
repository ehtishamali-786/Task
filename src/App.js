
import './App.css';
import {BrowserRouter,Routes,Route,Switch} from "react-router-dom";
import AllRoutes from './Routess';
function App() {
  return (
  
    <Routes>
      
   <Route  path='*' exact={true} element={<AllRoutes/>}></Route>
  
    </Routes>
   
  );
}

export default App;
