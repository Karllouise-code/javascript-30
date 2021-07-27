# Day 9

## Console Tricks!

This is the solution to the [ninth day challenge](https://javascript30.com/)
which is the Console Tricks!.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#link)

## Challenge and Process

Today is not about the challenge but more on tips about the dev tool as well as
the various things that console.log can do.

## Favorite Code

```js
//* Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});
```

## What I Learned

Today, my knowledge of using the browser dev tool has expanded:

- I discovered that you can also a debugger,
- Find out what html attribute is used,
- Find out which part of the code has javascript ,occurrence and,
- Of course the tricks of using Console.log.

## Useful Resources

- [Day 9 Template](https://github.com/wesbos/JavaScript30/tree/master/09%20-%20Dev%20Tools%20Domination)

## Link

See Solution -
<https://github.com/Karllouise-code/javascript-30/blob/main/Day-9/main.js>
