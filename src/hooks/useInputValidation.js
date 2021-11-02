import { useReducer } from "react";
const INITIAL_INPUT_STATE = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        value: action.value,
        isTouched: state,
      };
    case "BLUR":
      return {
        value: state.value,
        isTouched: true,
      };
    default:
      return {
        value: "",
        isTouched: false,
      };
  }
};
const useInputValidation = (validate) => {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [inputBoxTouch, setInputBoxTouch] = useState(false);
  const [state, dispatchEvent] = useReducer(inputReducer, INITIAL_INPUT_STATE);
  const valueIsValid = validate(state.value);
  const hasError = !valueIsValid && state.isTouched;
  const inputHandler = (event) => {
    dispatchEvent({
      type: "INPUT",
      value: event.target.value,
    });
  };
  const inputBoxBlurHandler = (event) => {
    dispatchEvent({
      type: "BLUR",
    });
  };
  const reset = () => {
    dispatchEvent({
      type: "RESET",
    });
  };
  return [
    hasError,
    valueIsValid,
    state.value,
    inputHandler,
    inputBoxBlurHandler,
    reset,
  ];
};

export default useInputValidation;
