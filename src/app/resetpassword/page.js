'use client'

import PageHeader from './pageheader/PageHeader.js'
import Form from '../components/Form.js'

export default function Page() {

  let resetPasswordData = {
    title: 'Reset Password',
    submitAction: async function(username, password) {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: `${username}`, password: `${password}` })
      })
      
      if (response.ok){
        alert('Your password has been reset-- Press OK to return to the home page')
        window.location.href=".."
      } else {
        alert(`Error resetting your password-- User does not exist`)
      }
    }
  }

  return (
    <div className="mt-4">
      <PageHeader />
      <hr className="max-w-screen-md mx-auto mt-8 mb-8"/>
      <div className="border pt-4 pb-8 mb-8 flex max-w-screen-md mx-auto">
        <Form formData={resetPasswordData} />
      </div>
    </div>
  )
}
