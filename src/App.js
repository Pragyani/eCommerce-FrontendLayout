import React from 'react';
import NavigationBar from './Components/navigation';
import './App.css';
import HeadigLine from './Components/TopHeading';

function App() {
  return (

    <div>
      <NavigationBar />
      <HeadigLine/>
      <div className='main-container'>
        <div className='conatiner'>
          <img src='https://plus.unsplash.com/premium_photo-1673514503009-912ffc6ff956?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image' />

          <div className='para'>
            <p>Express Yourself </p>
            <p>With </p>
            <p>Expectional Art </p>
            <p>Pieces</p>
          </div>

        </div>
      </div>
      <br></br><br></br><br></br>
    </div>
  );
}

export default App;
