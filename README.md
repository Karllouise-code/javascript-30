# Day 2

## Analog Clock

This is the solution to the [second day challenge](https://javascript30.com/) which is the analog clock.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [App Demo](#app-demo)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#links)

## Challenge and Process

This is my own words of challenge and my process.

- Fetch DOM of Hands
- Get to move the hands of clock
- Reasearch Date object
- Function to move every second/hr/min
- Move degrees according to the movement of the hands
- Make a formula so that it will reset degrees when it revolves a complete turn.
- Stop transition in hand seconds if it reach the top to not see the rotate movement.

## Favorite Code

```js
//* To be able to reset degrees as well as accurately according to the usual clock
const secondsDeg = (seconds / 60) * 360 + 90;
const minuteDeg = (minutes / 60) * 360 + 90;
const hoursDeg = (hours / 12) * 360 + 90;
```

```js
//* Code to stop transition for a while when the hand seconds reach the top(444deg) transition will be 0 or else continue to transition .01s
setTimeout(() => {
  if (secondsDeg == 444) {
    secondHand.style.transition = `0s`;
  } else {
    secondHand.style.transition = `.01s`;
  }
  console.log(secondHand.style.transition);
}, 1);
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/day2/images/jsClock.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day2/images/full-screenshot.png)

## What I Learned

Today, I've learned mostly about Date object where I can get the value of time in any format along with the transfom styles where I get to move/position element in its origin.

## Useful Resources

- [Day 2 Template](https://github.com/Karllouise-code/JavaScript30/tree/master/02%20-%20JS%20and%20CSS%20Clock)
- [MDN Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [W3Schools Get Date Methods](https://www.w3schools.com/js/js_date_methods.asp)

## Link

Live Site - <https://karllouise-drumkit.netlify.app/>
