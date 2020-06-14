import React, {Component} from "react"

class Navbar extends Component {
    render(){
        return(
        <nav className="navbar navbar-fixed-top navbar-expand-lg bg-success">
            <div className="navbar-header mx-auto">
                <a className="navbar-brand text-white" href="./">Productive at Home</a>
            </div>
            {/* <ul className="navbar navbar-nav mx-auto">
                <li className="navbar-item"><a href="#">Home</a></li>
                <li className="navbar-item"><a href="#">Tasks</a></li>
                <li className="navbar-item"><a href="#">Rewards</a></li>
            </ul>
            <ul className="navbar navbar-nav navbar-right" style={{color:"white"}}>
                <li className="navbar-item"><a href="#">Login</a></li>
                <li className="navbar-item"><a href="#">Register</a></li>
            </ul> */}
        </nav>
        );
    }
}

export default Navbar