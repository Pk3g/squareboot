import useInput from "./hooks/useInput";
import "./LoginPage.css";
import Background from "./Background";
import { NavLink } from "react-router-dom";

const LoginPage = (props) => {
  const {
    value: enteredPass,
    isValid: enteredPassIsValid,
    hasError: passInputHasError,
    valueChangeHandler: passChangedHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPassInput
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes("@"));

  if (enteredPassIsValid && enteredEmailIsValid) {
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredPassIsValid) {
      return;
    }

    console.log(enteredPass);
    resetPassInput();
    resetEmailInput();
  };

  const passInputClasses = passInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Background>
      <form className="form-started" onSubmit={formSubmissionHandler}>
        <h2>Login</h2>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email address</label>
          <input
            placeholder="Enter your email"
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <h5 className="error-text">Please enter a valid email.</h5>
          )}
        </div>
        <div className={passInputClasses}>
          <label htmlFor="password">
            Password
            <NavLink className="underline forget" to="/frogetpassword">
              Forgot your password?
            </NavLink>
          </label>
          <input
            placeholder="Enter your password"
            id="pass"
            type="password"
            onChange={passChangedHandler}
            onBlur={passBlurHandler}
            value={enteredPass}
          />
          {passInputHasError && (
            <h5 className="error-text">Invalid password</h5>
          )}
        </div>
        <div className="form-actions">
          <button>Login</button>
        </div>
        <p className="Newjob">
          New to MyJobs?
          <NavLink className="underline" to="/signup">
            Create an account
          </NavLink>
        </p>
      </form>
    </Background>
  );
};

export default LoginPage;
