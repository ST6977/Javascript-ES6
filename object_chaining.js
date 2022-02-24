// Optional chaining is a process for querying and calling properties, methods, and subscripts on an optional that might currently be nil

// const persons = {
//   person1: {
//     name: "Saad",
//     age: 15,
//     favPlayer: ["Sakib", "Maria"],
//   },
// };

// console.log(persons.person1.name);

// if (persons.person1) {
//   console.log(persons.person1.age);
//   if (persons.person1.hobby) {
//     console.log(persons.person1.hobby);
//   } else {
//     console.log("there is no hobby");
//   }
// }

const numbersArray = {
  numbers: [23, 434, 54],
};

// console.log(numbersArray.numbers[2]);

for (let i = 0; i < numbersArray.numbers.length; i++) {
  console.log(numbersArray.numbers[i]);
}
