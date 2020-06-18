import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="authForm">
        <div style={{ marginTop: "8rem" }} className="row">
          <div className="col s8">
            <Link style={{ marginBottom: "2rem" }} to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/signin">Sign in</Link>
              </p>
            </div>
            <form noValidate>
              <div className="input-field col s12">
                <input
                  id="name"
                  type="text"

                />
                <label htmlFor="name">Name</label>
                <span className="red-text"></span>
              </div>
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
                <span className="red-text"></span>
              </div>
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
                <span className="red-text"></span>
              </div>
              <div className="input-field col s12">
                <input
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text"></span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register