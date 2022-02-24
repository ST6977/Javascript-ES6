// array destructuring
const persons = ["Ahnaf", "Asif", "Amit", "kalam", "Rabbi"];

const [, person1, , , person2] = persons;
// destructuring
// first komar mane ahnaf bad!!person1 er mane second ta arif!!erpor ekta koma amnei! tarpor abr 2 ta koma mane amit r kalam o bad!!

console.log(person1);
console.log(person2);

// object destructuring

const players = {
  player1: {
    name: "Sakib",
    age: 32,
    cars: ["toyota,bmw"],
  },
  player2: "maria",
};

// const myFavPlayer = players.player2;

const { age } = players.player1;
console.log(age);

const sakibFavCar = players.player1.cars;

const { player2 } = players;

// console.log(players.player1);

console.log(player2);

// Nested object

// ekta object er moddhe r ekta object thakake nested object bole
