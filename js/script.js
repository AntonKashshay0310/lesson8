const arr1 = [1, 5, "4", "hello"]
const arr2 = [true,2, {}, ["a"], 222]

console.log(arr1[1]);
console.log(arr2[1]);

console.log(arr1[1] + arr2[1]);

// Створіть масив рядків. Виведіть в консоль значення першого елементу. Змініть значення останнього елементу.

const cars = ["koenigsegg", "pagani", "ferarri", "lamborgini"]
console.log(cars[0]);
console.log(cars[3]);
console.log(cars[cars.length - 1]);
cars[cars.length - 1] = "McLaren";
console.log(cars);