import { useEffect, useRef, useState } from "react";
import useInput from './../hooks/use-input';

//In this example shows without using useEffect() & with using useEffect() and finally using Custom hook;

const SimpleInput = (props) => {
  //const nameInputRef = useRef();
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurhandler: nameBlurhandler,
    reset:resetNameInput
  } = useInput(value  => value.trim() !== "");
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailtouched,setEnteredEmailtouched] = useState(false)
 // const [formIsValid, setFormIsValid] = useState(false);
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameinputisInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsvalid = enteredEmail.includes('@');
  const enteredEmailIsInValid = !enteredEmailIsvalid && enteredEmailtouched

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Name is invalid");
  //   }
  // }, [enteredNameIsValid]);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);  // We don't need useEffect()

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsvalid) {
    formIsValid = true
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);


  //   if (enteredName.trim() !== "") {
  //     setEnteredNameIsValid(true);
  //   }
  // };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
    
  }
  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  

  //   if (enteredName.trim() === "") {
  //     setEnteredNameIsValid(false);
  //   }
  // };

  const emailInputBlurHandler = () => {
    setEnteredEmailtouched(true)
  }

  const formSubmissionhandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
  

    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }

    if (!enteredNameIsValid) {
      return;
    }

    // setEnteredNameIsValid(true);

    console.log(enteredName);

    // const enteredvalue = nameInputRef.current.value;
    // console.log(enteredvalue);
    // nameInputRef.current.value('')  =>Not IDEAL, Don't Manipulate The DOM

    // setEnteredName("");
    // setEnteredNameTouched(false);
    resetNameInput()

    setEnteredEmail('')
    setEnteredEmailtouched(false)
  };

  // const nameinputisInvalid = !enteredNameIsValid && enteredNameTouched;   // ask doubt

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  
  const emailInputClasses = enteredEmailIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionhandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        {nameInputHasError && (
          <p className="error-text">Name Must not be Empty</p>
        )}
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          // ref={nameInputRef}
          value={enteredName}
          onBlur={nameBlurhandler}
        />
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        {enteredEmailIsInValid && (
          <p className="error-text">Please Enter a valid Email Id</p>
        )}
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          // ref={nameInputRef}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
