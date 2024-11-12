const obj1 = { name: 'Alice', age: 25, city: 'New York' };

const obj2 = { age: 30, city: 'Los Angeles', occupation: 'Engineer', gender: "Male" };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);