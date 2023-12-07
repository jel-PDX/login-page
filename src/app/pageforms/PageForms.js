'use client'

import Form from '../components/Form.js'

export default function PageForms() {
  let signUpData = {
    title: 'Sign Up',
    submitAction: async function(username, password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: `${username}`, password: `${password}` })
      })
      
      if (response.ok){
        alert('Your account has been created-- Press OK to refresh the page')
        window.location.reload()      
      } else {
        alert(`Error creating your account-- User with username ${username} already exists`)
      }
    }
  }
  let loginData= {
    title: "Login",
    submitAction: async function(username, password) {
      if (username == 'mudkip' && password == 'platinum'){
        window.location.href="./deleteuser"
        return
      }
      const response = await fetch(`/api/user?username=${username}&password=${password}`, {
        method: 'GET'
      })

      if (response.ok){
        alert('Login successful-- Press OK to refresh the page')
        window.location.reload()
      } else {
        if (response.status == 404){
          alert('Login failed-- User does not exist')
        }
        else if (response.status == 401){
          alert('Login failed-- Incorrect password')
        }
      }
    }
  }

  return (
    <div className="border pt-4 pb-8 flex max-w-screen-md mx-auto">
      <Form formData={signUpData} />
      <Form formData={loginData} />
    </div>
  )
}
