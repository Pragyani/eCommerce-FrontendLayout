import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import About from './pages/About/Aboutpage';
import ListingPage from './pages/ListingPage/ListingPage';
import Footer from './Components/footer/footer';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import DetailPage from './pages/Details/details';
import { DummyData } from './utlis';

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async (url) => {
    try {
      setProductData(DummyData.productData)

      console.log(DummyData.productData, ' ani');

    } catch (error) {
      console.log("erorr " + error.message)
    }
  }

  return (
    <>
      {productData.length !== 0 &&
        <BrowserRouter>
            <Header data={productData} />
            <Routes>
              <Route exact={true} path='/' element={<Home products={productData} />} />
              <Route exact={true} path='/listingPage/:id' element={<ListingPage data={productData} single={true} />} />
              <Route exact={true} path='/product/details' element={<DetailPage />} />
              <Route exact={true} path='/about' element={<About />} />
              <Route exact={true} path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      }
    </>
  );
}

export default App;
// export {AppContext , AppProvider};