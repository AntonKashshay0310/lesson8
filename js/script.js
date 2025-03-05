// const arr1 = [1, 5, "4", "hello"]
// const arr2 = [true,2, {}, ["a"], 222]

// console.log(arr1[1]);
// console.log(arr2[1]);

// console.log(arr1[1] + arr2[1]);

// // Створіть масив рядків. Виведіть в консоль значення першого елементу. Змініть значення останнього елементу.

// const cars = ["koenigsegg", "pagani", "ferarri", "lamborgini"]
// console.log(cars[0]);
// console.log(cars[3]);
// console.log(cars[cars.length - 1]);
// cars[cars.length - 1] = "McLaren";
// console.log(cars);


// Порахувати загальну суму покупок в корзині
const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;
for (const cart of carts) {
    // console.log(cart);
    total = total + cart;
}
console.log(total);

const cartsLength = carts.length;
console.log(cartsLength);

console.log(carts[cartsLength]);

carts[cartsLength] = 22;

console.log(carts);

// Напиши скрипт пошуку самого маленького числа в масиві,  при умові, що числа унікальні (не повторюються).
const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = number[0]
for (const number of numbers) {
    if(number < smallestNumber) {
        smallestNumber = number
    }
}
console.log(`The smallest number is: ${smallestNumber}`);