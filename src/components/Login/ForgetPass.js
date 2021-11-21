import useInput from "./hooks/useInput";
import "./LoginPage.css";
import Background from "./Background";

const ForgetPass = (props) => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes("@"));

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    return;
  };
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Background>
      <form className="form-started" onSubmit={formSubmissionHandler}>
        <h2>Forgot your password?</h2>
        <h5 className="desc-forgetemail">
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </h5>
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
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </Background>
  );
};
export default ForgetPass;
