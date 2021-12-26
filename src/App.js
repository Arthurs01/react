import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MenuAbout from './MenuAbout';
import Home from './Home';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/home"component={Home}/>
          <Route path="/about"component={MenuAbout}/>
          <Route path="/contact"component={Contact}/>
        </Switch>
      </Router>
      
    </div>
  );
}


export default App;
