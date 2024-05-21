import React from 'react';
import './App.css';
import Header from './Components/header/header';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home/HomePage';

function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
  <Route exact={true} path='/' element={<Home/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;


