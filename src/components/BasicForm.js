import useInput from "./../hooks/use-input";
const BasicForm = (props) => {
  
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: enteredFirstname,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputhasError,
    valueChangeHandler: firstNameChangehandler,
    inputBlurhandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameisValid,
    hasError: lastnameInputhasError,
    valueChangeHandler: lastNameChangehandler,
    inputBlurhandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurhandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameisValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.prevenDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstname);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputhasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastnameInputhasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={firstNameInputClasses}>
        <label htmlFor="fname">First Name</label>
        {firstNameInputhasError && (
          <p className="error-text">Enter First Name</p>
        )}
        <input
          type="text"
          id="fname"
          value={enteredFirstname}
          onChange={firstNameChangehandler}
          onBlur={firstNameBlurHandler}
        />

        <div className={lastNameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          {lastnameInputhasError && (
            <p className="error-text">Enter last Name</p>
          )}
          <input
            type="text"
            id="lname"
            value={enteredLastName}
            onChange={lastNameChangehandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        {emailInputHasError && <p className="error-text">Enter valid email</p>}
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
