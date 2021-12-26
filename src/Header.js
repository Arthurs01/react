import React from 'react'
import {Link, NavLink} from "react-router-dom"
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery'
import VideoHeader from './video/greenworld.mp4'


window.onload = function(){   

    var btnMenu = document.getElementById('icon-menu');
    var nav = document.getElementById('nav1');
    
     btnMenu.addEventListener('click', function(){
         nav.classList.toggle('mostrar');
     })
     $('.scroll').on('click', function(event){
        if(this.hash !==''){
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate(
            {
              scrollTop: $(hash).offset().top
            },
            800
          );
        }
      }); 


  }




function Header() {
    return (
        <div className='header'>
            <div className='header_flex'>
                <div className='logo'>
                    <div id="icon-menu"><FontAwesomeIcon icon={faBars}/>
                    </div>
                    <h2>Logo</h2>
                </div>
                <nav className='nav'id='nav1'>
                    <ul>
                        <li><NavLink to="/home"activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
              
                <div className='social_icons'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/arturo.lopez.940641/"><FontAwesomeIcon icon={faFacebook}/></a>&nbsp;&nbsp;&nbsp;
                       <Link to="/"><FontAwesomeIcon icon={faYoutube}/></Link>
                       </div>
                
            </div>
            <video className='videoTag' autoPlay loop muted>
                <source src={VideoHeader} type='video/mp4' />
                </video>
        </div>
    )
}

export default Header
