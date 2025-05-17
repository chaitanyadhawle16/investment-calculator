import { use } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput((prevInputValues) => {
      return {
        ...prevInputValues,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const isUserInputValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput inputValues={userInput} handleChange={handleUserInputChange} />
      {isUserInputValid ? <Results userInput={userInput} /> : <p className="center"> Please enter a valid duration</p>}
    </>
  );
}

export default App;
