// const obj1 = { name: 'Alice', age: 25, city: 'New York' };

// const obj2 = { age: 30, city: 'Los Angeles', occupation: 'Engineer', gender: "Male" };

// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);

const people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'David', age: 40, city: 'Chicago' }
];

const mergedObj = {};

people.map(person => {
    const city = person.city
    if (!mergedObj[city]) {
        mergedObj[city] = [];
    }
    mergedObj[city].push(person);
})

console.log(mergedObj)