import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/scss/bootstrap.scss';
import './style/App.scss';
import Menu from './components/Menu'
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Projects from './components/sections/Projects';



function App() {
  const onScroll = () => {

  }

  return (
    <div className="App">
      < Menu />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
