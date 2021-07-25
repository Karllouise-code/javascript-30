// ## Array Cardio Day 2

const people = [{
    name: 'Wes',
    year: 1988
}, {
    name: 'Kait',
    year: 1986
}, {
    name: 'Irv',
    year: 1970
}, {
    name: 'Lux',
    year: 2015
}];

const comments = [{
    text: 'Love this!',
    id: 523423
}, {
    text: 'Super good',
    id: 823423
}, {
    text: 'You are the best',
    id: 2039842
}, {
    text: 'Ramen is my fav food ever',
    id: 123523
}, {
    text: 'Nice Nice Nice!',
    id: 542328
}];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
//* OPTION 1 
/* const isAdult = people.some((person) => {
    const currentYear = new Date().getFullYear()
    if (currentYear - person.year >= 19) {
        return true;
    }
}) 
console.log(isAdult);
*/
//* OPTION 2
/* const isAdult = people.some(person => {
        const currentYear = new Date().getFullYear()
        return currentYear - person.year >= 19
    }) */
//* OPTION 3 - HOTSHOT 🔥
const isAdult = people.some(person =>
    ((new Date()).getFullYear() - person.year >= 19))
console.log({ isAdult });



// Array.prototype.every() // is everyone 19 or older?
//* My Answer
const olderNineteen = people.every(person => {
    const currentYear = new Date().getFullYear()
    return currentYear - person.year >= 19
})
console.log({ olderNineteen });

//* WES BOS
const allAdults = people.every(person =>
    ((new Date()).getFullYear() - person.year >= 19))
console.log({ allAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

//* MY ANSWER
function withId(id) {
    return id.id === 823423;
}
console.log(comments.find(withId));

//* WES BOS
//* OPTION 1
const comment = comments.find(function(comment) {
    if (comment.id === 823423) {
        return true
    }
})
console.log(comment);

//* OPTION 2
const commentOp2 = comments.find(comment => comment.id === 823423)
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

//* MY ANSWER
// const findComment = comments.findIndex(comment => comment.id === 823423) // find index with id === 823423
// const deleteComment = comments.splice(1, 1) // Deletes Comment with the id === 823423
// console.log(comments);

//* WES BOS
const index = comments.findIndex(comment => comment.id === 823423)
    // comments.splice(index, 1)

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
]