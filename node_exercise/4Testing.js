//using the curl command
// # Get all users
// curl http://localhost:3000/users

// # Create user
// curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Charlie","email":"charlie@test.com"}'

// # Update user
// curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name":"Updated Alice"}'

// # Delete user
// curl -X DELETE http://localhost:3000/users/2


//testing using the fetch method

//GET /users
fetch("http://localhost:3000/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

const userId = 1;

// GET /users/:id
fetch(`http://localhost:3000/users/${userId}`)
  .then(response => {
    if (!response.ok) throw new Error("User not found");
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));

// POST /users/newUser
const newUser = {
  name: "Charlie",
  email: "charlie@test.com"
};

fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newUser)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

const updatedUser = {
  name: "Alice Updated",
  email: "alice.updated@test.com"
};


// PUT /users/:id
fetch(`http://localhost:3000/users/1`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(updatedUser)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));


// Delete /users/:id
fetch(`http://localhost:3000/users/2`, {
  method: "DELETE"
})
  .then(response => response.json())
  .then(data => console.log("Deleted user:", data))
  .catch(err => console.error(err));
