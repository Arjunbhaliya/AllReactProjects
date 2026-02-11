import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    console.log("login click")
    setSubmitted(true);
    
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');

  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase "
  let inputClass = " w-full px-3 py-2 leading-tight  border rounded shadow"

  if(emailNotValid){
    labelClass += " text-red-400"
  }else{
    labelClass += " text-stone-300"
  }
  if(passwordNotValid){
    inputClass += " text-red-500 bg-red-100 border-red-300 "
  }else{
    inputClass += " text-gray-700  bg-stone-300"
  }

  return (
    <div className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800' >
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            className={inputClass}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label  className={labelClass}>Password</label>
          <input
            type="password"
            className={inputClass}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-300 hover:text-amber-500">
          Create a new account
        </button>
        <button className='px-4 py-2 bg-amber-300 font-semibold uppercase rounded-lg hover:bg-amber-500' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
