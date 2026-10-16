import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// Use effect and useState hooks to manage the state of the card component

const Card =({ title   }) => {
  
  const [count, setCount] = useState(0);

   const [hasLiked, setHasLiked] = useState(false);

   useEffect(() => {
    console.log(`Card ${title} has been ${hasLiked ? 'liked' : 'unliked'}.`);
  });


  return(
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br/> {count}</h2>
    <button onClick={() => setHasLiked(!hasLiked)}>
      {/* Condition based on having liked the card */}
      { hasLiked ? '❤️' : '🤍'}  

    </button>
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
