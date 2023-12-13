'use client'

import PageHeader from '../../components/deleteuser/PageHeader.js'
import Form from '../../components/Form.js'

export default function Page() {
  let deleteUserData = {
    title: 'Delete User',
    submitAction: async function(username, password) {
      const response = await fetch('/api/user', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: `${username}`, password: `${password}` })
      })
      
      if (response.ok){
        alert('User has been deleted-- Press OK to return to the home page')
        window.location.href=".."
      } 
      else if (response.status == 401){
          alert('Failed to delete user-- Admin password is incorrect')
      }
      else if (response.status == 404){
          alert('Failed to delete user-- User does not exist')
      }
    }
  }

  return (
    <div className="mt-4">
      <PageHeader />
      <hr className="max-w-screen-md mx-auto mt-8 mb-8"/>
      <div className="border pt-4 pb-8 mb-8 flex max-w-screen-md mx-auto">
        <Form formData={deleteUserData} />
      </div>
    </div>
  )
}
