let mock_db = []

export function createUser(username, password) {
  mock_db.push(
    {
      Username: username,
      Password: password
    }
  )
}

export function readUser(username) {
  let result = []

  for (const entry of mock_db) {
    if (username === entry.Username) {
      result.push(entry)
      break
    }
  }

  return result
}

export function updatePassword(username, new_password) {
  for (const entry of mock_db) {
    if (username === entry.Username) {
      entry.Password = new_password
      return
    }
  }
}

export function deleteUser(username) {
  mock_db.filter(item => item.Username !== username)
}
