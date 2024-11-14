
// Создание объекта с описанием

const userDescription = {
    name: "Artem",
    age: 19,
    occupation: "Веб-разработчик",
    greet: function(name) {
        return `Hello ${name}`;
    }
};

console.log(userDescription.greet("Artem"));


// Создание массива объектов пользователей

const users = [
    { name: "Alice", age: 25, isAdmin: false },
    { name: "Bob", age: 30, isAdmin: true },
    { name: "Charlie", age: 22, isAdmin: false },
    { name: "David", age: 28, isAdmin: false },
    { name: "Eva", age: 35, isAdmin: true }
];

let simpleUserCount = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUserCount += 1;
    }
}

console.log(`Количество простых пользователей: ${simpleUserCount}`);