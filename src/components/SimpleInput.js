import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setenteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name is invalid");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const formSubmissionhandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(true);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredvalue = nameInputRef.current.value;
    console.log(enteredvalue);
    // nameInputRef.current.value('')  =>Not IDEAL, Don't Manipulate The DOM

    setenteredName("");
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(true);
      return;
    }
  };

  const nameinputisInvalid = enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameinputisInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionhandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        {nameinputisInvalid && (
          <p className="error-text">Name Must not be Empty</p>
        )}
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
