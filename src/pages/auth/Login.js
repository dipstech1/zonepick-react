import React from 'react'

const Login = () => {
  return (
    <>
         <section className="login">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-12 col-lg-6 login_form">
              <div className="navbar-brand"><h6><b>Logo</b></h6></div>
              <div className="log_text">
                <h5>
                  <span>Nice to see you again!</span>
                  Welcome Back!
                </h5>
                <form className="mt-lg-5 mt-4" >
                  <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="username"/>
                    <label htmlFor="floatingInput">Email ID or Phone Number</label>
                  </div>
                  {/* <div className="invalid-feedback">{errors.username?.message}</div> */}
                  <div className="form-floating position-relative">
                    <input type="password" className="form-control pe-5" id="floatingPassword" placeholder="123456"  name="password"  />
                    <label htmlFor="floatingPassword">Password</label>
                    <a href="javascript:void(0);"><i className="fas fa-eye-slash"></i></a>
                  </div>
                  <button className="btn btn-log">Login
                  {/* {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                  </button>
                  <img src="/img/or.svg" className="w-100"/>
                  <button className="btn btn-logG"><img src="/img/google_icon.svg"/>Login with Google</button>
                  <p className="text-center pt-2">Have not met us before? <a href="register.html">Register</a></p>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-6 login_img p-0 d-none d-lg-block">
              <img src="/img/login_bg.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login