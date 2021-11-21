import useInput from "./hooks/useInput";
import "./LoginPage.css";
import Background from "./Background";
import { NavLink } from "react-router-dom";

const CreateAccount = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== "");

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

  const {
    value: enteredConfpass,
    isValid: enteredConfpassIsValid,
    hasError: ConfpassInputHasError,
    valueChangeHandler: ConfpassChangedHandler,
    inputBlurHandler: ConfpassBlurHandler,
    reset: resetConfpassInput
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSkills,
    valueChangeHandler: SkillsChangedHandler,
    reset: resetSkillsInput
  } = useInput((value) => true);

  if (enteredPassIsValid && enteredEmailIsValid) {
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredPassIsValid &&
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredConfpassIsValid
    ) {
      return;
    }

    async function signup() {
      let user = {
        Name: enteredName,
        Email: enteredEmail,
        Password: enteredPass,
        Skills: enteredSkills
      };
      let url = "https://www.postman.com/collections/d8dead6a15e80c4b7a61";
      let result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      result = await result.json();
      console.log(result);
    }
    signup();
    resetPassInput();
    resetEmailInput();
    resetNameInput();
    resetConfpassInput();
    resetSkillsInput();
  };

  const passInputClasses = passInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const ConfpassClasses = ConfpassInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Background>
      <form className="form-started" onSubmit={formSubmissionHandler}>
        <h2>Signup</h2>
        <div className="form-control">
          <label>I’m a* </label>
          <div className="passconfirm">
            <button>Recruiter</button>
            <button className="candidate-button">Candidate</button>
          </div>
        </div>
        <div className={nameInputClasses}>
          <label htmlFor="name">Full name*</label>
          <input
            placeholder="Enter your full name"
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <h5 className="error-text">The field is mandatory.</h5>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email address*</label>
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
        <div className="passconfirm">
          <div className={passInputClasses}>
            <label htmlFor="password">Create Password*</label>
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
          <div className={ConfpassClasses}>
            <label htmlFor="Confirmpassword">Confirm Password*</label>
            <input
              placeholder="Enter your password"
              id="Confirmpass"
              type="password"
              onChange={ConfpassChangedHandler}
              onBlur={ConfpassBlurHandler}
              value={enteredConfpass}
            />
            {ConfpassInputHasError && (
              <h5 className="error-text">Invalid password</h5>
            )}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="skill">Skills</label>
          <input
            placeholder="Enter comma separated skills"
            id="skill"
            type="text"
            onChange={SkillsChangedHandler}
            value={enteredSkills}
          />
        </div>
        <div className="form-actions">
          <button>Signup</button>
        </div>
        <p className="Newjob">
          Have an account?
          <NavLink className="underline" to="/login">
            Login
          </NavLink>
        </p>
      </form>
    </Background>
  );
};

export default CreateAccount;
