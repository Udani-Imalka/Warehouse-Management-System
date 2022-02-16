import { Component, React } from "react";
import { Link } from "react-router-dom";
import RouterPaths from "../../RouterPaths";

class Login extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card overflow-hidden">
              <div className="bg-primary bg-soft">
                <div className="row">

                  <div className="col-7">
                    <div className="text-primary p-4">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p>Sign in to continue</p>
                    </div>  
                  </div>

                  <div className="col-5 align-self-end">
                    <img
                      src="assets/images/profile-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                </div>
              </div>


              <div className="card-body pt-0">
                <div className="auth-logo">
                  <a href="index.html" className="auth-logo-light">
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src="assets/images/logo-light.svg"
                          alt=""
                          className="rounded-circle"
                          height={34}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="index.html" className="auth-logo-dark">
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src="assets/images/logo.svg"
                          alt=""
                          className="rounded-circle"
                          height={34}
                        />
                      </span>
                    </div>
                  </a>
                </div>
                <div className="p-2">
                  <form className="form-horizontal" action="index.html">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <div className="input-group auth-pass-inputgroup">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                        />
                        <button
                          className="btn btn-light "
                          type="button"
                          id="password-addon"
                        >
                          <i className="mdi mdi-eye-outline" />
                        </button>
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-check"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="remember-check"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="mt-3 d-grid">

                      <Link
                        className="btn btn-primary waves-effect waves-light"
                        type="submit"
                        to="/Dashboard"
                      >
                        Log In
                      </Link>

                    </div>
                    <div className="mt-4 text-center">
                      <a href="auth-recoverpw.html" className="text-muted">
                        <i className="mdi mdi-lock me-1" /> Forgot your
                        password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <div>
                <p>
                  Don't have an account ?{" "}
                  <a
                    href="auth-register.html"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Sign up now{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
