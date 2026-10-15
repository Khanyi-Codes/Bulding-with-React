import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const Card =({ title   }) => {
  return(
    <div className="card">
      <h2>{title}</h2>
    
    </div>
  )
}
const App = () => {
  return ( 
    <div className="card-container">
     
      <Card title = "Star Wars"  />
      <Card title = "The Matrix" />
      <Card title = "The Lord of the Rings" />
    </div>
  )
}

export default App
