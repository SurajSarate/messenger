import React from "react";
import {Link,useNavigate} from 'react-router-dom';

function SignIn() {
  let navigate=useNavigate();
  const onclick=()=>{
    navigate('/home');
    // console.log("Clicked");
  }
  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100 gx-0">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="card card-shadow border-0">
              <div className="card-body">
                <div className="row g-6">
                  <div className="col-12">
                    <div className="text-center">
                      <h3 className="fw-bold mb-2">Sign In</h3>
                      <p>Login to your account</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="signin-email"
                        placeholder="Don't Enter Your Email"
                      />
                      <label for="signin-email">Don't Enter Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="signin-password"
                        placeholder="Don't Enter Your Password"
                      />
                      <label for="signin-password">Don't Enter Your Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-block btn-lg btn-primary w-100"
                      type="submit"
                      onClick={onclick}
                    >
                      Click Here To Enter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p>
                Don't have an account yet? <Link to="/sign-up">Sign up</Link>
              </p>
              <p>
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
