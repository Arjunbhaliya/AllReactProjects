import { useState } from "react";
import { Input } from "./Input";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  })

  const [isEdit, setIsEdit] = useState({
    email: false,
    password: false
  })

  function handleChange(identifier, value) {
    setEnteredValue(prevValue => ({
      ...prevValue,
      [identifier]: value
    }))

    setIsEdit(prevValue => ({
      ...prevValue,
      [identifier]: false
    }))
  }

  function handleFocuse(identifier) {
    setIsEdit(prevValue => ({
      ...prevValue,
      [identifier]: true
    }))
  }

  const emailInvalid = isEdit.email && !enteredValue.email.includes('@');
  const passwordInvalid = isEdit.password && enteredValue.password.trim().length < 6

  function handleSubmit(event) {
    event.preventDefault()
    console.log(enteredValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email"
          name="email"
          onBlur={() => handleFocuse('email')}
          onChange={(event) => handleChange('email', event.target.value)}
          value={enteredValue.email}
          error={emailInvalid && <p>Email is invalid</p>}
        />

        <Input label="Password" id="password"
          name="password"
          onBlur={() => handleFocuse('password')}
          onChange={(event) => handleChange('password', event.target.value)}
          value={enteredValue.password}
          error={passwordInvalid && <p>Password is invalid</p>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
