import { createUser, readUser, updatePassword, deleteUser } from '../../db/db.js'

export async function GET(req) {
  const url = new URL(req.url)
  const searchParams = new URLSearchParams(url.search)
  const username_arg = searchParams.get('username')
  const password_arg = searchParams.get('password')

  // search database for entry where username = username_arg 
  const rows = readUser(username_arg)

  // if entry not found, return error, user does not exist
  if (rows.length == 0) {
    return new Response('User does not exist', {
      status: 404
    })
  } 
  // if entry found, check if password = password_arg
  else {
    if (rows[0].Password == password_arg) {
      // if so, return login success
      return new Response('Login successful', {
        status: 200
      })
    }
    else {
      return new Response('Incorrect password', {
        status: 401
      })
    }
  }
}

export async function POST(req) {
  const body = await req.json()

  // search database for entry where username = body.username
  const rows = readUser(body.username)

  // if entry found, return error, user already exists
  if (rows.length > 0) {
    return new Response('User already exists', {
      status: 409
    })
  } 
  // if entry not found, insert new entry with username and password
  else {
    createUser(body.username, body.password)
  }

  // return account creation success
  return new Response('User created successfully', {
    status: 200
  })
}

export async function PUT(req) {
  const body = await req.json()

  // search database for entry where username = body.username
  const [rows] = readUser(body.username)

  // if entry not found, return error, user does not exist
  if (rows.length == 0) {
    return new Response('User does not exist', {
      status: 404
    })
  } 

  // if entry found, change password to body.password
  else {
    updatePassword(body.username, body.password)
  }

  // return password reset success
  return new Response('Password updated successfully', {
    status: 200
  })
}

const admin_password = 'ilovebreadbarber'
export async function DELETE(req) {
  const body = await req.json()

  // if body.password != admin_password, return error, admin password incorrect
  if (body.password != admin_password) {
    return new Response('Admin password is incorrect', {
      status: 401
    })
  }

  // search database for entry where username = body.username
  const rows = readUser(body.username)

  // if entry not found, return error, user does not exist
  if (rows.length == 0) {
    return new Response('User does not exist', {
      status: 404
    })
  } 

  // if entry found, change password to body.password
  else {
    deleteUser(body.username)
  }

  // return delete user success
  return new Response('User deleted successfully', {
    status: 200
  })
}
