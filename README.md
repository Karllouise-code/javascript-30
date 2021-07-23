# Day 4

## Array Cardio Day 1

This is the solution to the [fourth day challenge](https://javascript30.com/) which is the Array Cardio Day 1 exercise.

In the main.js file you can see that I put Wes Bos's solution and at the bottom you can see my own answer some are correct, others have different code but same output and there, I have two wrong answers in number 5 and number 6 so in total I got 6/8 NOT BAD!🤓

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [Solutions](#solutions)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Link](#link)

## Challenge and Process

This is my own words of challenge and my process.

- Answer everything first before watching the video
- Understand the given questions
- Research the methods syntax and description if not known
- Code short as much as possible and use ES6 arrow function

## Favorite Code

```js
//* My answer on number 8, I got this on stackoverflow and I got to apply these in my answer as well as much shorter than Wes Bos' answer.

const counts = {};
data.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
  //console.log(counts);
});
console.log(counts);
```

[Source Code ☝️](https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript)

## Solutions

- [Main.js File](https://github.com/Karllouise-code/javascript-30/blob/main/Day-4/main.js)

```js
// Array.prototype.filter()
//* 1. Filter the list of inventors for those who were born in the 1500's

//* WES BOS
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log(fifteen);

//* MY ANSWER (SAME OUTPUT)
//* Vanilla JavaScript
for (let i = 0; i < inventors.length; i++) {
  if (inventors[i].year >= 1500 && inventors[i].year <= 1599) {
    console.table(inventors[i]);
  }
}
//* ES6 (SAME OUTPUT)
let fifteenHundreds = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1599
);
console.log(fifteenHundreds);

// Array.prototype.map()
//* 2. Give us an array of the inventors first and last names

//* WES BOS
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

//* MY ANSWER (SAME OUTPUT)
let firstNLast = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
console.log(firstNLast);
//* or (SAME OUTPUT)
let fullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullName);

// Array.prototype.sort()
//* 3. Sort the inventors by birthdate, oldest to youngest
//* WES BOS
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

//* MY ANSWER (SAME OUTPUT)
let sortBirthdate = inventors.sort((a, b) => a.year - b.year);
console.log(sortBirthdate);

// Array.prototype.reduce()
//* 4. How many years did all the inventors live all together?

//* WES BOS
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears); //* 861

//* MY ANSWER (SAME OUTPUT AS ABOVE 861)
let totalLived = inventors.reduce(function (accumulator, currentValue) {
  return accumulator + (currentValue.passed - currentValue.year);
}, 0);
console.log(totalLived); //* 861

//* 5. Sort the inventors by years lived

//* WES BOS
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return nextGuy - lastGuy;
});
console.log(oldest);

//* MY WRONG ANSWER
//* Ascending Sort
const ascendLived = inventors.sort((a, b) => a.year - b.year);
console.log(ascendLived);

//* Descending Sort
const descendLived = inventors.sort((a, b) => b.year - a.year);
console.log(descendLived);

//* 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//* WES BOS
const category = Array.from(document.querySelectorAll(".mw-category a"));
const de = category
  .map((category) => category.textContent)
  .filter((streetName) => streetName.includes("de"));
console.log(de);

//* MY ANSWER (Wrong Answer)
const deBoulevard = [
  "Boulevard de l'Amiral-Bruix",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard de la Zone",
];
console.log(deBoulevard);

//* 7. sort Exercise
// Sort the people alphabetically by last name

//* WES BOS
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//* My Answer (Same Output)
console.log(people.sort());

//* 8. Reduce Exercise
// Sum up the instances of each of these
let data = [
  "car",
  "trike",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

//* WES BOS
const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);

//* My Answer (Same Output)
const counts = {};
data.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
  //console.log(counts);
});
console.log(counts);
```

## What I Learned

Today, I am confident that my analysis skill has improved to the level that I can handle problems even if it is difficult and I have better understood the concept of JavaScript ES6.

## Useful Resources

- [Day 4 Template](https://github.com/wesbos/JavaScript30/tree/master/04%20-%20Array%20Cardio%20Day%201)
- [JavaScript Array filter: Filtering Elements](https://www.javascripttutorial.net/javascript-array-filter/)
- [JavaScript Array reduce & reduceRight: Reducing an Array Into a Value](https://www.javascripttutorial.net/javascript-array-reduce/)
- [JavaScript Array sort: Sorting Array Elements](https://www.javascripttutorial.net/javascript-array-sort/)
- [Count Duplicate Value in an Array in Javascript](https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript)

## Link

See Solution on Main.js - <https://github.com/Karllouise-code/javascript-30/blob/main/Day-4/main.js>
