import React from 'react';
import Navigation from './components/Navigation';  
import ProjectPage from './pages/projectpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ProjectPage/>
      <Footer/>
    </div>
  );
}

export default App;
