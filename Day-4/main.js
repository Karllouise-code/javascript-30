// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
//* 1. Filter the list of inventors for those who were born in the 1500's

//* WES BOS
const fifteen = inventors.filter((inventor => inventor.year >= 1500 && inventor.year < 1600))
console.log(fifteen);

//* MY ANSWER (SAME OUTPUT)
//* Vanilla JavaScript
for (let i = 0; i < inventors.length; i++) {
    if (inventors[i].year >= 1500 && inventors[i].year <= 1599) {
        console.table(inventors[i]);
    }
}
//* ES6 (SAME OUTPUT)
let fifteenHundreds = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599)
console.log(fifteenHundreds);

// Array.prototype.map()
//* 2. Give us an array of the inventors first and last names

//* WES BOS
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullNames);

//* MY ANSWER (SAME OUTPUT)
let firstNLast = inventors.map(inventor => inventor.first + ' ' + inventor.last)
console.log(firstNLast);
//* or (SAME OUTPUT)
let fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullName);

// Array.prototype.sort()
//* 3. Sort the inventors by birthdate, oldest to youngest
//* WES BOS 
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

//* MY ANSWER (SAME OUTPUT)
let sortBirthdate = inventors.sort((a, b) => a.year - b.year)
console.log(sortBirthdate);

// Array.prototype.reduce()
//* 4. How many years did all the inventors live all together?

//* WES BOS 
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)
console.log(totalYears); //* 861


//* MY ANSWER (SAME OUTPUT AS ABOVE 861) 
let totalLived = inventors.reduce(function(accumulator, currentValue) {
    return accumulator + (currentValue.passed - currentValue.year)
}, 0)
console.log(totalLived); //* 861


//* 5. Sort the inventors by years lived

//* WES BOS
const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year
    const nextGuy = b.passed - b.year
    return nextGuy - lastGuy
})
console.log(oldest);

//* MY WRONG ANSWER
//* Ascending Sort
const ascendLived = inventors.sort((a, b) => a.year - b.year)
console.log(ascendLived);

//* Descending Sort
const descendLived = inventors.sort((a, b) => b.year - a.year)
console.log(descendLived);


//* 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//* WES BOS
const category = Array.from(document.querySelectorAll(".mw-category a"))
const de = category
    .map(category => category.textContent)
    .filter(streetName => streetName.includes('de'))
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
]
console.log(deBoulevard);


//* 7. sort Exercise
// Sort the people alphabetically by last name

//* WES BOS
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ')
    const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1
})
console.log(alpha);

//* My Answer (Same Output)
console.log(people.sort());

//* 8. Reduce Exercise
// Sum up the instances of each of these
let data = ['car', 'trike', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

//* WES BOS 
const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0
    }
    obj[item]++
        return obj
}, {})
console.log(transportation);

//* My Answer (Same Output)
const counts = {}
data.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1
        //console.log(counts);
})
console.log(counts);