// const users = [
//     {
//         name: "user 1",
//         age: 10,
//     },
//     {
//         name: "user 2",
//         age: 50,
//     },
//     {
//         name: "user 6",
//         age: 30,
//     },
//     {
//         name: "user 3",
//         age: 25,
//     },
//     {
//         name: "user 4",
//         age: 5,
//     },
//     {
//         name: "user 5",
//         age: 8,
//     },
// ]

// const filteredUsers = users.filter((user) => user.age > 25);
// filteredUsers.map(filteredUser => console.log(filteredUser.name));

const people = [
    {
        user: "user 1",
        gender: "male",
        age: 18
    },
    {
        user: "user 2",
        gender: "female",
        age: 7
    },
    {
        user: "user 3",
        gender: "male",
        age: 78
    },
    {
        user: "user 4",
        gender: "male",
        age: 27
    },
    {
        user: "user 5",
        gender: "female",
        age: 98
    },
    {
        user: "user 6",
        gender: "male",
        age: 5
    },
    {
        user: "user 7",
        gender: "male",
        age: 50
    },
    {
        user: "user 8",
        gender: "female",
        age: 30
    },
    {
        user: "user 9",
        gender: "male",
        age: 35
    },
    {
        user: "user 10",
        gender: "female",
        age: 21
    },
    {
        user: "user 11",
        gender: "male",
        age: 31
    },
    {
        user: "user 12",
        gender: "female",
        age: 30
    },
    {
        user: "user 12",
        gender: "male",
        age: 35
    },
    {
        user: "user 13",
        gender: "female",
        age: 19
    },
]

const filteredPeople = people.filter((person) => person.age >= 18
)

filteredPeople.map(filteredPerson => console.log(filteredPerson.user + " is " + filteredPerson.gender + " and is eligible to vote."))