import React from 'react'
import './home.css'
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className='home'>
            <div className='home_welcome'>
                <h1><span className='welcome_text'>Welcome</span> to my page</h1><br/>
                <p>See more about me</p><br/><br/>
                <Link className='boton_home' to='/about'>Go</Link>
            </div>
            
        </div>
    )
}

export default Home
