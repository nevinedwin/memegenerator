import React from 'react'
import './App.css'
import Meme from './Components/Meme/Meme'
import Navbar from './Components/Navbar/Navbar'

export default function App() {
    return (
        <div className='App-cont'>
            <Navbar />
            <Meme />
        </div>
    )
}