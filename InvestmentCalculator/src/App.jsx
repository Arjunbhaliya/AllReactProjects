import Result from "./components/Result"
import UserInput from "./components/UserInput"
import { useState } from "react"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 8

  })

  const validInput = userInput.duration && userInput.initialInvestment && userInput.annualInvestment > 0;

  function handleChange(idenfair, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [idenfair]: +value
      }

    })
  }

  return (
    <>
      <div>
        <UserInput userInput={userInput} onChange={handleChange} />
        {validInput ? <Result input={userInput} /> : <p className="center">Please Enter valid data</p>}
      </div>
    </>
  )
}

export default App
