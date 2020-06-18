import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signin extends Component {
  render() {
    return (
      <div className="authForm">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col-sx-8">
            <Link style={{ marginTop: "8rem" }} to="/" className="btn-flat">
              Back to home
            </Link>
            <div className="col-sx-12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Sign in</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate>
              <div className="input-field col-xs-12">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                />
              </div>
              <div className="input-field col-xs-12">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                />
              </div>
              <div className="col-sx-12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large btn-primary waves-effect waves-light hoverable blue accent-3"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin