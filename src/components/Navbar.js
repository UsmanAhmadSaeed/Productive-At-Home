import React, {Component} from "react"
import { Link } from 'react-router-dom';
 
import * as ROUTES from '../constants/routes';

class Navbar extends Component {
    render(){
        return(
        <nav className="navbar navbar-fixed-top navbar-expand-lg bg-success">
            <div className="navbar-header">
                <Link to={ROUTES.HOME} className="navbar-brand navbar-left text-white">Productive at Home</Link>
            </div>
            <div className="navbar-right">
                <Link to={ROUTES.SIGN_IN} className="btn btn-primary">Sign In</Link>
                <Link to={ROUTES.REGISTER} className="btn btn-info">Register</Link>
            </div>
        </nav>
        );
    }
}

export default Navbar