// const obj1 = { name: 'Alice', age: 25, city: 'New York' };

// const obj2 = { age: 30, city: 'Los Angeles', occupation: 'Engineer', gender: "Male" };

// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);

// const people = [
//     { name: 'Alice', age: 25, city: 'New York' },
//     { name: 'Bob', age: 30, city: 'Los Angeles' },
//     { name: 'Charlie', age: 35, city: 'New York' },
//     { name: 'David', age: 40, city: 'Chicago' }
// ];

// const mergedObj = {};

// people.map(person => {
//     const city = person.city
//     if (!mergedObj[city]) {
//         mergedObj[city] = [];
//     }
//     mergedObj[city].push(person);
// })

// console.log(mergedObj)



// You have an array of orders, where each order is an object that contains orderId, customerName, and totalAmount. You need to group these orders by customerName and, in addition to the grouped orders, calculate the total amount spent by each customer.

// input

// const orders = [
//     { orderId: 1, customerName: 'Alice', totalAmount: 200 },
//     { orderId: 2, customerName: 'Bob', totalAmount: 150 },
//     { orderId: 3, customerName: 'Alice', totalAmount: 300 },
//     { orderId: 4, customerName: 'Charlie', totalAmount: 400 },
//     { orderId: 5, customerName: 'Bob', totalAmount: 120 },
// ];

// output

// {
// Alice: {
// orders: [
// { orderId: 1, customerName: 'Alice', totalAmount: 200 },
// { orderId: 3, customerName: 'Alice', totalAmount: 300 }
// ],
// totalSpent: 500
// },
// Bob: {
// orders: [
// { orderId: 2, customerName: 'Bob', totalAmount: 150 },
// { orderId: 5, customerName: 'Bob', totalAmount: 120 }
// ],
// totalSpent: 270
// },
// Charlie: {
// orders: [
// { orderId: 4, customerName: 'Charlie', totalAmount: 400 }
// ],
// totalSpent: 400
// }
// }

const orders = [
    { orderId: 1, customerName: 'Alice', totalAmount: 200 },
    { orderId: 2, customerName: 'Bob', totalAmount: 150 },
    { orderId: 3, customerName: 'Alice', totalAmount: 300 },
    { orderId: 4, customerName: 'Charlie', totalAmount: 400 },
    { orderId: 5, customerName: 'Bob', totalAmount: 120 },
];

const mergedOrders = {};

orders.map(order => {
    const name = order.customerName;

    if (!mergedOrders[name]) {
        mergedOrders[name] = {
            orders: [],
            totalSpent: 0
        };
    }

    mergedOrders[name].orders.push(order);
    mergedOrders[name].totalSpent += order.totalAmount;
})

console.log(JSON.stringify(mergedOrders, null, 2));
