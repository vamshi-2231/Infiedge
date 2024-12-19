import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Faq from './Components/Faq';
import Team from './Components/Team';
import './Components/assets/css/style.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Service />
      <Feature />
      <Team/>
      <Faq/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;