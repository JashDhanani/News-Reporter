import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"


export default function Home(props) {

    const loadHome = ()=>{
        props.setProgress(10)
        props.setProgress(100)
    }

  return (
    <div className='home' onLoad={loadHome}>
      <h1>Welcome to </h1>
      <h2>News-Reporter!!</h2>
      <p>Get all latest news from Diffrent country and stay updated</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nostrum. Quaerat qui sunt necessitatibus mollitia doloremque aut saepe nobis maiores earum, sed excepturi placeat facilis labore quas totam est reprehenderit.</p>
      <Link to="/"><button>Get Started</button></Link>
    </div>
  )
}
