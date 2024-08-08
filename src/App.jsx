import React from 'react'

import Hero from './components/Hero';
import Memo from './components/Memo';
import './App.css';


const App = () => {
  return (
    <main> 
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Hero/>
        <Memo/>
      </div>
       </main>
  )
}

export default App