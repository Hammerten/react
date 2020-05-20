import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../services/auth";
import { useHistory } from "react-router-dom";

function Login() {
  const { authenticate, isAuthenticated } = useContext(AuthContext);
  const { handleSubmit, register, errors } = useForm();
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated !== "false") {
      history.push("/");
    }
  });

  const onSubmit = (data) => {
    authenticate(data);
  };

  return (
    <div
      className="login-container container border rounded"
      style={{ padding: "3%", maxWidth: "25%" }}
    >
      <h3 className="mb-4 text-center">Sign In</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="loginInputEmail">Email</label>
          <input
            id="loginInputEmail"
            name="email"
            placeholder="Email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "არასწორი მეილი",
              },
            })}
          />
          {errors.email && (
            <div className="text-danger">{errors.email.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="loginInputPassword">Password</label>
          <input
            id="loginInputPassword"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Password"
            name="password"
            type="password"
            ref={register({
              required: "Required",
            })}
          />
          {errors.password && (
            <div className="text-danger">{errors.password.message}</div>
          )}
        </div>
        <div className="submit-container mt-4">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <a className="float-right" href="/">
            Register
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
