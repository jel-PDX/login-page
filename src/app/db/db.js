const fs = require("fs")

export function createUser(username, password) {
  let data = fs.readFileSync("/home/james/projects/login-page/temp/src/app/db/data.json", "utf-8") 

  data = JSON.parse(data)

  data.users.push(
    {
      Username: username,
      Password: password
    }
  )

  data = JSON.stringify(data)

  fs.writeFileSync("/home/james/projects/login-page/temp/src/app/db/data.json", data)
}

export function readUser(username) {
  let data = fs.readFileSync("/home/james/projects/login-page/temp/src/app/db/data.json", "utf-8") 
  data = JSON.parse(data)

  let result = []

  for (const entry of data.users) {
    if (username === entry.Username) {
      result.push(entry)
      break
    }
  }

  return result
}

export function updatePassword(username, new_password) {
  let data = fs.readFileSync("/home/james/projects/login-page/temp/src/app/db/data.json", "utf-8") 
  data = JSON.parse(data)

  for (let i = 0; i < data.users.length; i++) {
    if (username === data.users[i].Username) {
      data.users[i].Password = new_password
      break
    }
  }

  data = JSON.stringify(data)

  fs.writeFileSync("/home/james/projects/login-page/temp/src/app/db/data.json", data)
}

export function deleteUser(username) {
  let data = fs.readFileSync("/home/james/projects/login-page/temp/src/app/db/data.json", "utf-8") 
  data = JSON.parse(data)

  data.users = data.users.filter(item => item.Username !== username)

  data = JSON.stringify(data)

  console.log('data after deletion = ')
  console.log(data)
  fs.writeFileSync("/home/james/projects/login-page/temp/src/app/db/data.json", data)
}
