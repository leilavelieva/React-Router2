import React, {Component} from "react";


import { Route,
 NavLink,
 HashRouter
} from "react-router-dom";
import AboutMe from "./abutme";
import Service from "./Service";
import Contacts from "./Contcts";


class Main extends Component {
 render() {
 return (
     <HashRouter>
 <div>
 <h1>LVP</h1>
 <ul className="header">
 <li><NavLink to ="/aboutme">Про мене</NavLink></li>
 <li><NavLink to="/service">Мої послуги</NavLink></li>
 <li><NavLink to="/contact">Контакти</NavLink></li>
 </ul>
 <div className="content">
 <Route exact path="/aboutme" component={AboutMe}/>
 <Route path="/service" component={Service}/>
 <Route path="/contact" component={Contacts}/>
 </div>
 </div>
 </HashRouter>
 );
 }
}
export default Main;