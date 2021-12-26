import React from 'react'
import './technologies.css'

function Technologies() {
    return (
        <div className='technologies'>
            <div className='technologies_left'>
                <h2>Frontend</h2>
                <div className='line'></div><br/>
                <ul><li>React.js</li></ul>
                <ul><li>Html</li></ul>
                <ul><li>CSS</li></ul>
                <ul><li>Javascript</li></ul>
            </div>
            <div className='technologies_right'>
                <h2>Others</h2>
                <div className='line'></div><br/>
                <ul><li>Jquery</li></ul>
                <ul><li>Node.js</li></ul>
                <ul><li>Git</li></ul>
                <ul><li>Github</li></ul>
            </div>
        </div>
        
    )
}

export default Technologies
