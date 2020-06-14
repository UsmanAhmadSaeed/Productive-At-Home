import React, {Component} from "react"

class Navbar extends Component {
    render(){
        return(
        <nav className="navbar navbar-fixed-top navbar-expand-lg bg-success">
            <div className="navbar-header mx-auto">
                <a className="navbar-brand text-white" href="./">Productive at Home</a>
            </div>
        </nav>
        );
    }
}

export default Navbar