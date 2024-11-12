const users = [
    {
        name: "user 1",
        age: 10,
    },
    {
        name: "user 2",
        age: 50,
    },
    {
        name: "user 6",
        age: 30,
    },
    {
        name: "user 3",
        age: 25,
    },
    {
        name: "user 4",
        age: 5,
    },
    {
        name: "user 5",
        age: 8,
    },
]

const filteredUsers = users.filter((user) => user.age > 25);
console.log(filteredUsers)