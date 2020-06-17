import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './style/App.scss';
import Menu from './components/Menu'
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="App">
      < Menu />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
