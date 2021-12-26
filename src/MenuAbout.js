import {Link, Switch, Route, NavLink} from "react-router-dom"
import MenuAboutImg from './img/5.PNG'
import './menuAbout.css'
import Projects from "./Projects";
import Technologies from "./Technologies";


function MenuAbout() {
    return (
        
      <div className="menu_about">
          <div className="menu_about_info">
              <p>
                 <span className="welcome_text">Lic. Arturo López</span> <br/><br/>
                  Programmer<br/><br/>
                  32 years old<br/><br/>
                  Universidad de Sonora
              </p>
              <div className="menu_about_img">
                <img src={MenuAboutImg} alt="menuaboutimg"></img>
              </div>
          </div>
        <div className="menu_about_skills">
        <ul>
          <li><NavLink to="/about/programming"activeClassName="active">Programming</NavLink></li>
          <li><NavLink to="/about/networking"activeClassName="active">Networking</NavLink></li>
        </ul>
        </div>
        <div className="menu_about_skills_content">
          <Switch>
            <Route path="/about/programming"component={MenuProgramming}/>
            <Route path="/about/networking">Not Found</Route>
          </Switch>
          </div>
            
        

      </div>
    );
  }
  function MenuProgramming() {
    return (
      <div className="menu_programming">
          <div className="menu_programming_left">
        <ul>
          <li><NavLink to="/about/programming/technologies"activeClassName="active">Technologies</NavLink></li>
          <li><NavLink to="/about/programming/projects"activeClassName="active">Projects</NavLink></li>
        </ul>
        </div>
        <div className="menu_programming_right">
          <Switch>

            <Route path="/about/programming/technologies"component={Technologies}/>
            <Route path="/about/programming/projects"component={Projects}/>
            
          </Switch>
          </div>
        
      </div>
    );
  }
  
  export default MenuAbout