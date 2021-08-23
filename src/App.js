import { useState } from 'react'


import './css/language.css';

import Top from './components/top';
import About from './components/description';
import Offert from './components/ofert';
import Recomendation from './components/recomendation';
import Contact from './components/contactForm';

function App() {
  return (
    <> 
    <Top />
    <About/>
    <div className="tlo"></div>
    <Offert/>
    <Recomendation/>
    <Contact/>

    </>
  );
}

export default App;
