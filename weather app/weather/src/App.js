import React from 'react'
import Header from './components/Header'
import Input_box from './components/Input_box'
import Button from './components/Button'
import Show_result from './components/Show_result';
import weather from './Weather';
import './Stle.css'
function App() {
  return (
    <div className='Weather_card'>
  <Header />
  <Input_box/>
  <Button/>
  <Show_result />
    </div>
  )
}

export default App
