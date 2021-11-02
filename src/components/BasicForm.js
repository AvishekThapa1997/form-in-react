import useInputValidation from "../hooks/useInputValidation";
const BasicForm = (props) => {
  const [
    firstNameIsInValid,
    firstNameIsValid,
    firstName,
    firstNameInputHandler,
    firstNameInputBlurHandler,
    firstNameReset,
  ] = useInputValidation((firstName) => {
    return firstName.trim().length > 0;
  });
  const [
    lastNameIsInValid,
    lastNameIsValid,
    lastName,
    lastNameInputHandler,
    lastNameInputBlurHandler,
    lastNameReset
  ] = useInputValidation((lastName) => {
    return lastName.trim().length > 0;
  });
  const [
    emailIsInValid,
    emailIsValid,
    email,
    emailInputHandler,
    emailInputBlurHandler,
    emailReset,
  ] = useInputValidation((email) => {
    return email.trim().length > 2 && email.includes("@");
  });
  let isFormValid = false;
  if (emailIsValid && firstNameIsValid && lastNameIsValid) {
    isFormValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameIsInValid ? " invalid" : ""}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameInputHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameIsInValid && <p className="error-text">Please Enter a valid firstname !</p>}
        </div>
        <div className={`form-control ${lastNameIsInValid ? " invalid" : ""}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameInputHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameIsInValid && <p className="error-text">Please Enter a valid lastname !</p>}
        </div>
      </div>
      <div className={`form-control ${emailIsInValid ? " invalid" : ""}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailIsInValid && <p className="error-text">Please Enter a valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
