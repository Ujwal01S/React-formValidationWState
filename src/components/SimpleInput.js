import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef= useRef();
  const[enteredName, setEnteredName]= useState('');
  const [enteredNameIsValid, setEnteredNameIsValid]= useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched]= useState(false);

  useEffect(()=>{
      if (enteredNameIsValid) {
        console.log('here');
      }
    }, [enteredNameIsValid]);

  const nameInputChangeHandler= (event)=> {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler= (event)=> {
    event.preventDefault();
    setEnteredNameIsTouched(true);

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);

    const enteredValue= nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName('');
  };
  const nameInputIsInvalid= !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses= nameInputIsInvalid
   ? 'form-control invalid' 
   : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
         ref={nameInputRef}
         onChange={nameInputChangeHandler}
         type='text' 
         id='name'
         value={enteredName} 
         />
         {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
