'use client'

import {useState} from 'react'

import SubmitButton from './SubmitButton'

export default function Form({formData}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }
  function handleClick() {
    if (username == '' || password == '')
      return

    formData.submitAction(username, password)
  }

  return (
    <div className="w-48 mx-auto">
        <p>{formData.title}</p>
      <br></br>
      <div className="flex space-x-4">
        <div>
          <p>Username:</p>
          <br></br>
          <p>Password:</p>
        </div>
        <div>
          <div className="flex space-x-4">
            <input type="text" value={username} onChange={handleUsernameChange} className="w-36 h-full text-black" />
          </div>
            <br></br>
          <div className="flex space-x-4">
            <input type="text" value={password} onChange={handlePasswordChange} className="w-36 h-full text-black" />
          </div>
        </div>
      </div>
      <br></br>
      <SubmitButton onClick={handleClick}/>
    </div>
  )
}
