console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

console.log(receivedPassword);

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("uneven number");
}
// Part 3: Hotdogs
const numberOfHotdogs = 42;
let totalCost = 0;

if (numberOfHotdogs < 5) {
  totalCost = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
  totalCost = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1000000) {
  totalCost = numberOfHotdogs * 1;
} else {
  totalCost = numberOfHotdogs * 0.1;
}
console.log(`Total: ${totalCost}€`);

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "still need to learn!" : "!!-PARTYTIME-!!";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";
const coachName = "Peter";

const greeting = `Hello ${name === coachName ? "Coach!" : name}`;

console.log(greeting);
