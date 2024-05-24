import React from 'react';
import './App.css';
import Header from './Components/header/header';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home/HomePage';
import About from './pages/About/Aboutpage';

function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
  <Route exact={true} path='/' element={<Home/>}/>
  <Route exact={true} path='/about' element={<About/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;


