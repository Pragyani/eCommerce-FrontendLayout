import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import About from './pages/About/Aboutpage';
import ListingPage from './pages/ListingPage/ListingPage';
import Footer from './Components/footer/footer';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import DetailPage from './pages/Details/details';
import axios from 'axios';


function App() {

  useEffect(() => {
    getData()
  }, []);

  const getData = async(url)=>{
    try{
      const res = await axios('http://localhost:3000/productData');
      console.log(res.data);

    }catch(error){
      console.log(error.message)
    }
  } 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route exact={true} path='/listingPage' element={<ListingPage />} />
          <Route exact={true} path='/product/details' element={<DetailPage />} />
          <Route exact={true} path='/about' element={<About />} />
          <Route exact={true} path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


