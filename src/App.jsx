import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import "./App.css"

function App() {
  return (
    <div className='app'>
      {/* navbar */}
      <Navbar/>

      {/* header  */}
      <Header />
    </div>
  )
}

export default App