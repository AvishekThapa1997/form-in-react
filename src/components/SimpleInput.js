// import { useState, useRef } from "react";
import useInputValidation from "../hooks/useInputValidation";
const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  // const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);
  // const [enteredEmail, setEmail] = useState("");
  // const nameIsValid = enteredName.trim().length > 0;
  // const emailIsValid =
  //   enteredEmail.trim().length > 1 && enteredEmail.includes("@");
  // let isFormValid = false;
  // if (nameIsValid && emailIsValid) {
  //   isFormValid = true;
  // }
  // const enteredNameIsInvalid = !nameIsValid && enteredNameTouch;
  // const enteredEmailIsInvalid = !emailIsValid && enteredEmailTouch;
  // const inputNameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  // const inputEmailChangeHandler = (event) => {
  //   setEmail(event.target.value);
  // };
  // const nameFocusChangeHandler = (event) => {
  //   setEnteredNameTouch(true);
  // };
  // const emailFocusChangeHandler = (event) => {
  //   setEnteredEmailTouch(true);
  // }
  const [
    nameIsInValid,
    validName,
    name,
    nameInputHandler,
    nameInputBlurHandler,
    nameReset
  ] = useInputValidation((name) => {
    return name.trim().length > 0;
  });

  const [
    emailIsInValid,
    validEmail,
    email,
    emailInputHandler,
    emailInputBlurHandler,
    emailReset
  ] = useInputValidation((email) => {
    return email.trim().length > 2 && email.includes("@");
  });
  let isFormValid = false;
  if (validName && validEmail) {
    isFormValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouch(true);
    // se
    if (!validName || !validEmail) {
      return;
    }
    nameReset();
    emailReset();
    // setEnteredNameTouch(false);
    // setEnteredEmailTouch(false);
    // setEnteredName("");
    // setEmail("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control${nameIsInValid ? " invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={name}
        />
        {nameIsInValid && <p className="error-text">Invalid Name</p>}
      </div>
      <div className={`form-control${emailIsInValid ? " invalid" : ""}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailIsInValid && <p className="error-text">Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
