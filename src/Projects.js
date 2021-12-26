import React from 'react'
import './projects.css'

import img1 from './img/mrhalley.PNG'
import img2 from './img/Business.png'
import img3 from './img/Hotel.png'
import img4 from './img/Distributor.png'
import img5 from './img/Space.png'
import img6 from './img/Technology.png'


function Projects() {
    return (
        <div className='projects'>
            <h2>Some Projects</h2>
            <div className='line'></div><br/>
            <div className='projects_img'>
                
                <a target="_blank" rel="noopener noreferrer" href='https://arthurs01.github.io/mr_halley'><img src={img1}></img>My Rock Band</a>
                <a target="_blank" rel="noopener noreferrer" href='https://arthurs01.github.io/business/'><img src={img2}></img>Business</a>
                <a target="_blank" rel="noopener noreferrer" href='https://arthurs01.github.io/hotel_website/'><img src={img3}></img>Hotel</a>
                <a target="_blank" rel="noopener noreferrer" href='https://arthurs01.github.io/cyalimentos/'><img src={img4}></img>Distributor</a>
                <a target="_blank" rel="noopener noreferrer" href='https://arthurs01.github.io/space/'><img src={img5}></img>Space</a>
                <a target="_blank" rel="noopener noreferrer" href=''><img src={img6}></img>Technology</a>
              
               
            </div>
        </div>
    )
}

export default Projects
