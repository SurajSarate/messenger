import React from "react";
import {Link} from "react-router-dom"
function LockScreen() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100 gx-0">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="card card-shadow border-0">
              <div className="card-body position-relative pt-0 mb-6">
                <div className="position-absolute top-0 start-50 translate-middle">
                  <Link
                    to="#"
                    className="avatar avatar-xl mx-auto border border-light border-5"
                  >
                    <img
                      src="assets/img/avatars/1.jpeg"
                      alt=""
                      className="avatar-img"
                    />
                  </Link>
                </div>
              </div>

              <div className="card-body">
                <div className="row g-6">
                  <div className="col-12">
                    <div className="text-center">
                      <h4 className="fw-bold">William Pearson</h4>
                      <p>
                        Enter your password to <br /> unlock the screen
                      </p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="lockscreen-password"
                        placeholder="Password"
                      />
                      <label for="lockscreen-password">Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-block btn-lg btn-primary w-100"
                      type="submit"
                    >
                      Unlock
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              Not you? Return <Link to="/">Sign in.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LockScreen;
