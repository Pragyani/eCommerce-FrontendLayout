import React from 'react';
import NavigationBar from './Components/navigation';
import './App.css';
import HeadigLine from './Components/TopHeading';
import Container from './Components/mainContainer';
function App() {
  return (

    <div>
      <NavigationBar />
      <HeadigLine/>
      <Container/>
    </div>
  );
}

export default App;
