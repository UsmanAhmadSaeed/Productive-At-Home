import React, {Component} from "react"

class Navbar extends Component {
    render(){
        return(
        <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg bg-dark">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Productive at Home</a>
            </div>
            <ul className="navbar navbar-nav" style={{color:"white"}}>
                <li className="navbar-item">Home</li>
                <li className="navbar-item">Tasks</li>
                <li className="navbar-item">Rewards</li>
            </ul>
        </nav>
        );
    }
}

export default Navbar