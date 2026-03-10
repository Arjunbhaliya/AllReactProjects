import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  })

  const [emailInvalid, setEmailInvalid] = useState(false)

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
    setEmailInvalid(isEdit.email && !enteredValue.email.includes('@'))
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(enteredValue)

    if (!enteredValue.email.includes('@')) {
      setEmailInvalid(true)
      return;
    }

    setEmailInvalid(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" name="email"
            onBlur={() => handleFocuse('email')}
            onChange={(event) => handleChange('email', event.target.value)}
            value={enteredValue.email}

          />
          <div>{emailInvalid && <p>Email is invalid</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            onChange={(event) => handleChange('password', event.target.value)}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
